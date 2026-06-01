'use client';

import React, { useState } from 'react';
import { PetList } from '@/features/pets/view/petList';
import { Input, Button } from '@/shared/components';

export default function PetsPage() {
  const [type, setType] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Browse Pets</h1>
          <p className="text-gray-600 mt-2 text-lg">Find your perfect companion</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Filter by</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Pet Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
              >
                <option value="">All Types</option>
                <option value="dog">Dogs</option>
                <option value="cat">Cats</option>
                <option value="bird">Birds</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Price Range</label>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors">
                <option>All Prices</option>
                <option>Under ₹10,000</option>
                <option>₹10,000 - ₹20,000</option>
                <option>₹20,000 - ₹50,000</option>
                <option>Above ₹50,000</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Location</label>
              <Input placeholder="Search location..." />
            </div>
            <div className="flex items-end">
              <Button
                onClick={() => setType('')}
                variant="outline"
                className="w-full"
              >
                Reset Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Pet List */}
        <PetList type={type} />
      </div>
    </div>
  );
}
