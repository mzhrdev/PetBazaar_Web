'use client';

import React from 'react';
import { Card, Button } from '@/shared/components';

export default function ProfilePage() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'buyer',
    joinDate: '2024-01-15',
    phone: '+91 9876543210',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">My Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile Info */}
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Information</h2>
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">Name</label>
                <p className="text-lg font-semibold text-gray-900">{user.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-1">Email</label>
                <p className="text-lg font-semibold text-gray-900">{user.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Phone</label>
                <p className="text-lg font-semibold text-gray-900">{user.phone}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Account Type</label>
                <p className="text-lg font-semibold text-gray-900 capitalize">{user.role}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Joined</label>
                <p className="text-lg font-semibold text-gray-900">
                  {new Date(user.joinDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            <Button className="w-full mt-6">Edit Profile</Button>
          </Card>

          {/* Account Stats */}
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Stats</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-600">Wishlist Items</p>
                <p className="text-3xl font-bold text-blue-600">0</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-600">Previous Purchases</p>
                <p className="text-3xl font-bold text-green-600">0</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-600">Reviews Given</p>
                <p className="text-3xl font-bold text-orange-600">0</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Actions */}
        <div className="mt-8">
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline">Change Password</Button>
              <Button variant="outline">Manage Addresses</Button>
              <Button variant="outline">Payment Methods</Button>
              <Button variant="outline">Download Data</Button>
            </div>
          </Card>
        </div>

        {/* Danger Zone */}
        <div className="mt-8">
          <Card className="border-2 border-red-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Danger Zone</h2>
            <p className="text-gray-600 mb-4">
              These actions are permanent and cannot be undone.
            </p>
            <Button variant="ghost" className="text-red-600 hover:text-red-700">
              Deactivate Account
            </Button>
            <Button variant="ghost" className="text-red-600 hover:text-red-700 ml-2">
              Delete Account
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
