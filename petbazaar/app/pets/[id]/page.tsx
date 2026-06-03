'use client';

import React from 'react';
import { PetDetails } from '@/features/pets/view/petDetails';

export default function PetDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <PetDetails id={params.id} />
      </div>
    </div>
  );
}
