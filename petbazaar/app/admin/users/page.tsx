'use client';

import React from 'react';
import { Card, Button } from '@/shared/components';

export default function AdminUsersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">User Management</h1>

        <Card>
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4 text-lg">User management table and controls</p>
            <p className="text-sm text-gray-500 mb-6">This section is available in the Admin Dashboard</p>
            <a href="/admin/dashboard">
              <Button>Back to Dashboard</Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}
