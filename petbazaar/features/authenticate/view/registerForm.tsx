'use client';

import React, { useState } from 'react';
import { useAuthViewModel } from '../view_model/useAuthViewModel';
import { Input, Button } from '@/shared/components';

export const RegisterForm: React.FC = () => {
  const { register, loading, error, clearError } = useAuthViewModel();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'buyer',
  });
  const [validationError, setValidationError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    setValidationError('');

    if (formData.password !== formData.confirmPassword) {
      setValidationError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setValidationError('Password must be at least 6 characters');
      return;
    }

    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role as 'buyer' | 'seller' | 'admin',
      });
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'buyer',
      });
      setTimeout(() => {
        window.location.href = '/profile';
      }, 1500);
    } catch (err) {
      // Error is handled by the hook
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-md w-full space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Join PetBazaar</h2>
        <p className="mt-2 text-gray-600">Create your account to get started</p>
      </div>

      {success && (
        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Registration successful! Redirecting...
        </div>
      )}

      {(error || validationError) && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error || validationError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          type="text"
          placeholder="John Doe"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          label="Email"
          type="email"
          placeholder="your@email.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Account Type
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Creating account...' : 'Create Account'}
        </Button>
      </form>

      <div className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
          Sign in
        </a>
      </div>
    </div>
  );
};
