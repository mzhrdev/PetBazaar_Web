'use client';

import React, { useEffect } from 'react';
import { usePetsViewModel } from '../view_model/usePetsViewModel';
import { PetCard } from '@/shared/components';

interface PetListProps {
  type?: string;
}

export const PetList: React.FC<PetListProps> = ({ type }) => {
  const { pets, loading, fetchAllPets, filterByType } = usePetsViewModel();

  useEffect(() => {
    if (type) {
      filterByType(type);
    } else {
      fetchAllPets();
    }
  }, [type, fetchAllPets, filterByType]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-gray-200 rounded-lg h-72 animate-pulse" />
        ))}
      </div>
    );
  }

  if (pets.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No pets found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {pets.map(pet => (
        <PetCard
          key={pet.id}
          id={pet.id}
          name={pet.name}
          breed={pet.breed}
          price={pet.price}
          image={pet.image}
          location={pet.location}
          seller={pet.seller}
        />
      ))}
    </div>
  );
};
