'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePetsViewModel } from '../view_model/usePetsViewModel';
import { formatCurrency } from '@/shared/utils/currency';
import { formatRelativeDate } from '@/shared/utils/date';
import { AlertCircle } from 'lucide-react';

export function PetList({ type }: { type?: string }) {
  const { pets, loading, error, refetch } = usePetsViewModel({ breed: type ? type : undefined });

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col space-y-3 rounded-lg border p-4 shadow-sm">
            <div className="h-48 w-full rounded-md bg-muted animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-3/4 rounded bg-muted animate-pulse" />
              <div className="h-4 w-1/2 rounded bg-muted animate-pulse" />
              <div className="flex justify-between mt-4">
                <div className="h-6 w-20 rounded-full bg-muted animate-pulse" />
                <div className="h-6 w-16 rounded-full bg-muted animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-600 flex items-center space-x-3">
        <AlertCircle className="h-5 w-5" />
        <div className="flex-1">
          <h3 className="font-semibold text-sm">Failed to load pets</h3>
          <p className="text-sm mt-1">{error}</p>
        </div>
        <button 
          onClick={() => refetch()}
          className="px-3 py-1.5 text-sm font-medium bg-red-100 hover:bg-red-200 rounded-md transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (pets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 border border-dashed rounded-lg bg-gray-50/50">
        <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <span className="text-2xl">🐕</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">No pets found</h3>
        <p className="text-sm text-gray-500 mt-1 max-w-sm text-center">
          We couldn&apos;t find any pets matching your criteria. Try adjusting your filters or check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {pets.map((pet) => {
        const primaryImage = pet.images?.find(img => img.is_primary)?.storage_path || pet.images?.[0]?.storage_path;
        // In a real app, you would use supabase.storage.from('pets').getPublicUrl(primaryImage).data.publicUrl
        const imageUrl = primaryImage ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/pets/${primaryImage}` : 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=600&auto=format&fit=crop';

        return (
          <Link href={`/pets/${pet.id}`} key={pet.id} className="group flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500">
            <div className="aspect-[4/3] relative w-full overflow-hidden bg-gray-100">
              <Image 
                src={imageUrl} 
                alt={`Photo of ${pet.name}, a ${pet.breed}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg line-clamp-1">{pet.name}</h3>
                <span className="font-bold text-green-600 ml-2 whitespace-nowrap">
                  {formatCurrency(pet.price)}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-1 mb-3">
                {pet.breed} • {pet.age_months} months
              </p>
              
              <div className="mt-auto pt-3 border-t flex justify-between items-center text-xs text-muted-foreground">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold text-xs transition-colors bg-green-50 text-green-700 border-green-200">
                  {pet.status ? pet.status.charAt(0).toUpperCase() + pet.status.slice(1) : 'Unknown'}
                </span>
                <span>{formatRelativeDate(pet.created_at)}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
