'use client';

import { useState, useCallback } from 'react';
import { authModel, type LoginCredentials, type RegisterCredentials, type User } from '../model/authModel';

export const useAuthViewModel = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);
    try {
      const result = await authModel.login(credentials);
      setUser(result);
      localStorage.setItem('user', JSON.stringify(result));
      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const register = useCallback(async (credentials: RegisterCredentials) => {
    setLoading(true);
    setError(null);
    try {
      const result = await authModel.register(credentials);
      setUser(result);
      localStorage.setItem('user', JSON.stringify(result));
      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Registration failed';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await authModel.logout();
      setUser(null);
      localStorage.removeItem('user');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Logout failed';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    clearError,
  };
};
