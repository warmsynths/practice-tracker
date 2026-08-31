import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AuthService, getRedirectUrl } from './auth-service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    vi.restoreAllMocks();
    authService = new AuthService('https://mock.supabase.co', 'mock-anon-key');
  });

  it('initializes with unauthenticated state when no session exists', () => {
    const state = authService.getAuthState();
    expect(state.isAuthenticated).toBe(false);
    expect(state.user).toBeNull();
    expect(state.accessToken).toBeNull();
  });

  it('returns false and error message when trying to sign in without credentials', async () => {
    const unconfigured = new AuthService('', '');
    const res = await unconfigured.signInWithPassword('test@example.com', 'password123');
    expect(res.success).toBe(false);
    expect(res.message).toContain('not configured');
  });

  it('notifies subscribers on auth state change', () => {
    const listener = vi.fn();
    const unsubscribe = authService.subscribe(listener);

    expect(listener).toHaveBeenCalledWith(expect.objectContaining({
      isAuthenticated: false,
    }));

    unsubscribe();
  });

  describe('getRedirectUrl', () => {
    it('returns custom redirect URL if provided', () => {
      expect(getRedirectUrl('https://custom.app/callback')).toBe('https://custom.app/callback');
    });

    it('returns VITE_REDIRECT_URL when set in environment', () => {
      const url = getRedirectUrl();
      const expectedEnv = (import.meta as any).env?.VITE_REDIRECT_URL || (import.meta as any).env?.VITE_SITE_URL;
      if (expectedEnv) {
        expect(url).toBe(expectedEnv);
      }
    });

    it('uses window.location.origin + window.location.pathname when no env var is configured', () => {
      const originalWindow = globalThis.window;
      globalThis.window = {
        location: {
          origin: 'https://example.com',
          pathname: '/practice-tracker/',
        },
      } as any;

      try {
        const url = getRedirectUrl();
        const envUrl = (import.meta as any).env?.VITE_REDIRECT_URL || (import.meta as any).env?.VITE_SITE_URL;
        if (envUrl) {
          expect(url).toBe(envUrl);
        } else {
          expect(url).toBe('https://example.com/practice-tracker/');
        }
      } finally {
        globalThis.window = originalWindow;
      }
    });
  });

  describe('resetPasswordForEmail', () => {
    it('calls client.auth.resetPasswordForEmail with computed redirect URL', async () => {
      const mockReset = vi.fn().mockResolvedValue({ error: null });
      (authService as any).client = {
        auth: {
          resetPasswordForEmail: mockReset,
        },
      };

      const res = await authService.resetPasswordForEmail('user@example.com');
      expect(res.success).toBe(true);
      expect(mockReset).toHaveBeenCalledWith('user@example.com', {
        redirectTo: getRedirectUrl(),
      });
    });

    it('allows overriding redirect URL explicitly', async () => {
      const mockReset = vi.fn().mockResolvedValue({ error: null });
      (authService as any).client = {
        auth: {
          resetPasswordForEmail: mockReset,
        },
      };

      const customUrl = 'https://warmsynths.github.io/practice-tracker/';
      const res = await authService.resetPasswordForEmail('user@example.com', customUrl);
      expect(res.success).toBe(true);
      expect(mockReset).toHaveBeenCalledWith('user@example.com', {
        redirectTo: customUrl,
      });
    });
  });
});

