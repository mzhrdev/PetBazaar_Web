'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from './Button';

interface PetCardProps {
  id: string;
  name: string;
  breed: string;
  price: number;
  image: string;
  location: string;
  seller?: string;
}

export const PetCard: React.FC<PetCardProps> = ({
  id,
  name,
  breed,
  price,
  image,
  location,
  seller,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">
      {/* Image Container */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 m-3 rounded-lg text-sm font-semibold">
          ₹{price.toLocaleString()}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name and Breed */}
        <h3 className="text-lg font-bold text-gray-900 truncate mb-1">
          {name}
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          {breed}
        </p>

        {/* Location & Seller */}
        <div className="mb-4 space-y-1">
          <p className="text-sm text-gray-600">
            📍 {location}
          </p>
          {seller && (
            <p className="text-xs text-gray-500">
              {seller}
            </p>
          )}
        </div>

        {/* View Button */}
        <Link href={`/pets/${id}`} className="block">
          <Button
            variant="primary"
            size="sm"
            className="w-full"
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};
