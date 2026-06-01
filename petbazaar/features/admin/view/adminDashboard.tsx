'use client';

import React, { useEffect } from 'react';
import { useAdminViewModel } from '../view_model/useAdminViewModel';
import { Card, Button } from '@/shared/components';

export const AdminDashboard: React.FC = () => {
  const { stats, users, listings, loading, fetchStats, fetchUsers, fetchListings } = useAdminViewModel();

  useEffect(() => {
    fetchStats();
    fetchUsers();
    fetchListings();
  }, [fetchStats, fetchUsers, fetchListings]);

  if (loading) {
    return <div className="animate-pulse space-y-6">Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <p className="text-gray-600 text-sm font-semibold">Total Users</p>
            <p className="text-4xl font-bold text-blue-600 mt-2">{stats?.totalUsers}</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-gray-600 text-sm font-semibold">Total Listings</p>
            <p className="text-4xl font-bold text-green-600 mt-2">{stats?.totalListings}</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-gray-600 text-sm font-semibold">Total Revenue</p>
            <p className="text-4xl font-bold text-purple-600 mt-2">
              ₹{(stats?.totalRevenue || 0).toLocaleString()}
            </p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-gray-600 text-sm font-semibold">New Users</p>
            <p className="text-4xl font-bold text-orange-600 mt-2">{stats?.newUsersThisMonth}</p>
          </div>
        </Card>
      </div>

      {/* Users Table */}
      <Card>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Email</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Role</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{user.email}</td>
                    <td className="py-3 px-4 capitalize font-semibold">{user.role}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        user.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : user.status === 'inactive'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">Ban</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      {/* Listings Table */}
      <Card>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Pet Listings</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Pet Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Seller</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Price</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings.map(listing => (
                  <tr key={listing.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{listing.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{listing.seller}</td>
                    <td className="py-3 px-4">₹{listing.price.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        listing.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {listing.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {new Date(listing.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">Review</Button>
                      <Button variant="ghost" size="sm" className="text-red-600">Remove</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
};
