'use client';

import React, { useEffect } from 'react';
import { useSellerViewModel } from '../view_model/useSellerViewModel';
import { Card, Button } from '@/shared/components';

interface SellerDashboardProps {
  sellerId: string;
}

export const SellerDashboard: React.FC<SellerDashboardProps> = ({ sellerId }) => {
  const { stats, listings, loading, fetchStats, fetchListings } = useSellerViewModel();

  useEffect(() => {
    fetchStats(sellerId);
    fetchListings(sellerId);
  }, [sellerId, fetchStats, fetchListings]);

  if (loading) {
    return <div className="animate-pulse space-y-6">Loading...</div>;
  }

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <p className="text-gray-600 text-sm font-semibold">Total Listings</p>
            <p className="text-4xl font-bold text-blue-600 mt-2">{stats?.totalListings}</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-gray-600 text-sm font-semibold">Active</p>
            <p className="text-4xl font-bold text-green-600 mt-2">{stats?.activePets}</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-gray-600 text-sm font-semibold">Sold</p>
            <p className="text-4xl font-bold text-orange-600 mt-2">{stats?.soldPets}</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-gray-600 text-sm font-semibold">Total Earnings</p>
            <p className="text-4xl font-bold text-purple-600 mt-2">
              ₹{(stats?.totalEarnings || 0).toLocaleString()}
            </p>
          </div>
        </Card>
      </div>

      {/* Listings */}
      <Card>
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Listings</h2>
            <a href="/seller/add-pet">
              <Button>+ Add Pet</Button>
            </a>
          </div>

          {listings.length === 0 ? (
            <p className="text-gray-600 py-8 text-center">No listings yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
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
                      <td className="py-3 px-4">₹{listing.price.toLocaleString()}</td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          listing.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : listing.status === 'sold'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {listing.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {new Date(listing.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4">
                        <div className="space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm">Delete</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
