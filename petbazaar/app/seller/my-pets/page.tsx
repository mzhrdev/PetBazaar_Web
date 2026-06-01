'use client';

import React from 'react';
import { Card, Button } from '@/shared/components';

export default function MyPetsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">My Pet Listings</h1>
          <a href="/seller/add-pet">
            <Button>+ Add New Pet</Button>
          </a>
        </div>

        {/* Seller Dashboard - Reuse from Dashboard page */}
        <Card>
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4 text-lg">View your active and sold pet listings here</p>
            <p className="text-sm text-gray-500">This mirrors your dashboard - manage all your listings in one place</p>
            <a href="/seller/dashboard">
              <Button className="mt-4">Go to Dashboard</Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}
