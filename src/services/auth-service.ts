import { createClient, SupabaseClient, User, Session as SupabaseSession } from '@supabase/supabase-js';
import { AuthState, AuthUser } from '../types';

function getEnvSupabaseUrl(): string | undefined {
  try {
    return (import.meta as any).env?.VITE_SUPABASE_URL || undefined;
  } catch {
    return undefined;
  }
}

function getEnvSupabaseAnonKey(): string | undefined {
  try {
    return (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || undefined;
  } catch {
    return undefined;
  }
}

export function getRedirectUrl(customRedirectTo?: string): string {
  if (customRedirectTo && customRedirectTo.trim()) {
    return customRedirectTo.trim();
  }
  try {
    const envUrl = (import.meta as any).env?.VITE_REDIRECT_URL || (import.meta as any).env?.VITE_SITE_URL;
    if (envUrl && typeof envUrl === 'string' && envUrl.trim()) {
      return envUrl.trim();
    }
  } catch {
    // ignore
  }
  if (typeof window !== 'undefined' && window.location) {
    return window.location.origin + window.location.pathname;
  }
  return 'http://localhost:5173';
}

export type AuthStateListener = (state: AuthState) => void;

export class AuthService {
  private client: SupabaseClient | null = null;
  private currentUser: AuthUser | null = null;
  private currentAccessToken: string | null = null;
  private isLoading = true;
  private listeners: Set<AuthStateListener> = new Set();
  private recoveryListeners: Set<() => void> = new Set();

  constructor(supabaseUrl?: string, supabaseAnonKey?: string) {
    const url = supabaseUrl !== undefined ? supabaseUrl : getEnvSupabaseUrl();
    const key = supabaseAnonKey !== undefined ? supabaseAnonKey : getEnvSupabaseAnonKey();

    if (url && key) {
      try {
        this.client = createClient(url, key, {
          auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true,
          },
        });

        // Initialize session and set up listener
        this.client.auth.getSession().then(({ data }) => {
          this.handleSession(data.session);
          this.isLoading = false;
          this.notify();
        });

        this.client.auth.onAuthStateChange((event, session) => {
          this.handleSession(session);
          this.isLoading = false;
          this.notify();
          if (event === 'PASSWORD_RECOVERY') {
            this.notifyPasswordRecovery();
          }
        });
      } catch (err) {
        console.error('Failed to initialize Supabase Auth client:', err);
        this.isLoading = false;
      }
    } else {
      this.isLoading = false;
    }
  }

  private handleSession(session: SupabaseSession | null) {
    if (session && session.user) {
      this.currentUser = {
        id: session.user.id,
        email: session.user.email,
      };
      this.currentAccessToken = session.access_token;
    } else {
      this.currentUser = null;
      this.currentAccessToken = null;
    }
  }

  private notify() {
    const state = this.getAuthState();
    this.listeners.forEach((listener) => listener(state));
  }

  private notifyPasswordRecovery() {
    this.recoveryListeners.forEach((listener) => {
      try {
        listener();
      } catch (err) {
        console.error('Error in password recovery listener:', err);
      }
    });
  }

  public onPasswordRecovery(listener: () => void): () => void {
    this.recoveryListeners.add(listener);
    return () => {
      this.recoveryListeners.delete(listener);
    };
  }

  public hasRecoveryInUrl(): boolean {
    if (typeof window === 'undefined' || !window.location) return false;
    const hash = window.location.hash || '';
    const search = window.location.search || '';
    return hash.includes('type=recovery') || search.includes('type=recovery');
  }

  public subscribe(listener: AuthStateListener): () => void {
    this.listeners.add(listener);
    // Immediately call listener with current state
    listener(this.getAuthState());
    return () => {
      this.listeners.delete(listener);
    };
  }

  public isConfigured(): boolean {
    return this.client !== null;
  }

  public getAuthState(): AuthState {
    return {
      user: this.currentUser,
      accessToken: this.currentAccessToken,
      isAuthenticated: !!this.currentUser && !!this.currentAccessToken,
      isLoading: this.isLoading,
    };
  }

  public getUser(): AuthUser | null {
    return this.currentUser;
  }

  public async getAccessToken(): Promise<string | null> {
    if (!this.client) return null;
    try {
      const { data } = await this.client.auth.getSession();
      if (data.session) {
        this.currentAccessToken = data.session.access_token;
        return data.session.access_token;
      }
    } catch {
      // ignore
    }
    return this.currentAccessToken;
  }

  public async signUp(email: string, password: string, redirectTo?: string): Promise<{ success: boolean; message?: string; user?: User }> {
    if (!this.client) {
      return { success: false, message: 'Supabase credentials are not configured.' };
    }
    try {
      const targetRedirect = getRedirectUrl(redirectTo);
      const { data, error } = await this.client.auth.signUp({
        email: email.trim(),
        password,
        options: {
          emailRedirectTo: targetRedirect,
        },
      });
      if (error) {
        return { success: false, message: error.message };
      }
      return { success: true, user: data.user || undefined };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      return { success: false, message: msg };
    }
  }

  public async signInWithPassword(email: string, password: string): Promise<{ success: boolean; message?: string }> {
    if (!this.client) {
      return { success: false, message: 'Supabase credentials are not configured.' };
    }
    try {
      const { data, error } = await this.client.auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      if (error) {
        return { success: false, message: error.message };
      }
      this.handleSession(data.session);
      this.notify();
      return { success: true };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      return { success: false, message: msg };
    }
  }

  public async signInWithOtp(email: string, redirectTo?: string): Promise<{ success: boolean; message?: string }> {
    if (!this.client) {
      return { success: false, message: 'Supabase credentials are not configured.' };
    }
    try {
      const targetRedirect = getRedirectUrl(redirectTo);
      const { error } = await this.client.auth.signInWithOtp({
        email: email.trim(),
        options: {
          emailRedirectTo: targetRedirect,
        },
      });
      if (error) {
        return { success: false, message: error.message };
      }
      return { success: true, message: 'Check your email for the magic login link!' };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      return { success: false, message: msg };
    }
  }

  public async signInWithOAuth(provider: 'google' = 'google', redirectTo?: string): Promise<{ success: boolean; message?: string }> {
    if (!this.client) {
      return { success: false, message: 'Supabase credentials are not configured.' };
    }
    try {
      const targetRedirect = getRedirectUrl(redirectTo);
      const { error } = await this.client.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: targetRedirect,
        },
      });
      if (error) {
        return { success: false, message: error.message };
      }
      return { success: true };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      return { success: false, message: msg };
    }
  }

  public async resetPasswordForEmail(email: string, redirectTo?: string): Promise<{ success: boolean; message?: string }> {
    if (!this.client) {
      return { success: false, message: 'Supabase credentials are not configured.' };
    }
    try {
      const targetRedirect = getRedirectUrl(redirectTo);
      const { error } = await this.client.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: targetRedirect,
      });
      if (error) {
        return { success: false, message: error.message };
      }
      return { success: true, message: 'Password reset link sent to your email.' };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      return { success: false, message: msg };
    }
  }

  public async updateUserPassword(password: string): Promise<{ success: boolean; message?: string }> {
    if (!this.client) {
      return { success: false, message: 'Supabase credentials are not configured.' };
    }
    try {
      const { error } = await this.client.auth.updateUser({ password });
      if (error) {
        return { success: false, message: error.message };
      }
      return { success: true, message: 'Password updated successfully.' };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      return { success: false, message: msg };
    }
  }

  public async signOut(): Promise<{ success: boolean; message?: string }> {
    if (!this.client) {
      this.currentUser = null;
      this.currentAccessToken = null;
      this.notify();
      return { success: true };
    }
    try {
      const { error } = await this.client.auth.signOut();
      if (error) {
        return { success: false, message: error.message };
      }
      this.currentUser = null;
      this.currentAccessToken = null;
      this.notify();
      return { success: true };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      return { success: false, message: msg };
    }
  }
}

export const authService = new AuthService();
