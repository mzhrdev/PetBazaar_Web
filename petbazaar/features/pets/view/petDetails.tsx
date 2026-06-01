'use client';

import React, { useEffect } from 'react';
import { usePetsViewModel } from '../view_model/usePetsViewModel';
import { Card, Button } from '@/shared/components';

interface PetDetailsProps {
  petId: number;
}

export const PetDetails: React.FC<PetDetailsProps> = ({ petId }) => {
  const { selectedPet, loading, fetchPetById } = usePetsViewModel();

  useEffect(() => {
    fetchPetById(petId);
  }, [petId, fetchPetById]);

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-96 bg-gray-200 rounded-lg" />
        <div className="h-8 bg-gray-200 rounded w-1/2" />
        <div className="h-4 bg-gray-200 rounded" />
      </div>
    );
  }

  if (!selectedPet) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">Pet not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
          <img
            src={selectedPet.image}
            alt={selectedPet.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{selectedPet.name}</h1>
            <p className="text-xl text-gray-600 mt-2">{selectedPet.breed}</p>
          </div>

          <Card>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b">
                <span className="text-gray-600">Price:</span>
                <span className="text-3xl font-bold text-blue-600">
                  ₹{selectedPet.price.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Age:</span>
                <span className="font-semibold">{selectedPet.age} years</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Type:</span>
                <span className="font-semibold capitalize">{selectedPet.type}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Location:</span>
                <span className="font-semibold">📍 {selectedPet.location}</span>
              </div>
              <div className="flex justify-between py-2 border-t pt-4">
                <span className="text-gray-600">Seller:</span>
                <span className="font-semibold">{selectedPet.seller}</span>
              </div>
            </div>
          </Card>

          <div className="space-y-3">
            <Button className="w-full" size="lg">
              Contact Seller
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>

      {/* Description */}
      <Card>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About {selectedPet.name}</h2>
          <p className="text-gray-700 leading-relaxed">{selectedPet.description}</p>
        </div>
      </Card>
    </div>
  );
};
