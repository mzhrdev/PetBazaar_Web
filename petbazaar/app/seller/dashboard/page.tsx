'use client';

import React from 'react';
import { SellerDashboard } from '@/features/seller/view/sellerDashboard';

export default function SellerDashboardPage() {
  const sellerId = '1'; // Mock seller ID - will come from auth in real app

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <SellerDashboard sellerId={sellerId} />
      </div>
    </div>
  );
}
