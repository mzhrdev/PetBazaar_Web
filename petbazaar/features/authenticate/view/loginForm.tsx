'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuthViewModel } from '../view_model/useAuthViewModel';
import { Input, Button } from '@/shared/components';

export const LoginForm: React.FC = () => {
  const { login, loading, error, clearError } = useAuthViewModel();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    try {
      await login(formData);
      setSuccess(true);
      setFormData({ email: '', password: '' });
      setTimeout(() => {
        window.location.href = '/profile';
      }, 1500);
    } catch (err) {
      // Error is handled by the hook
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-md w-full space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
        <p className="mt-2 text-gray-600">Sign in to your PetBazaar account</p>
      </div>

      {success && (
        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Login successful! Redirecting...
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="your@email.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="font-semibold text-green-600 hover:text-green-500 hover:underline transition-all">
          Create one
        </Link>
      </p>
    </div>
  );
};
