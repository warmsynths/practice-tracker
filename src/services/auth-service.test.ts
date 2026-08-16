import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AuthService } from './auth-service';

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
});
