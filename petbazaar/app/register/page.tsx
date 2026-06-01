'use client';

import React from 'react';
import { RegisterForm } from '@/features/authenticate/view/registerForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <RegisterForm />
    </div>
  );
}
