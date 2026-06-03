'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePetDetailsViewModel } from '../view_model/usePetsViewModel';
import { formatCurrency } from '@/shared/utils/currency';
import { formatFullDate } from '@/shared/utils/date';
import { MapPin, Calendar, Tag, User, Loader2, AlertCircle, ChevronLeft } from 'lucide-react';

export function PetDetails({ id }: { id: string }) {
  const { pet, loading, error, refetch } = usePetDetailsViewModel(id);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 animate-pulse">
        <div className="mb-6 h-4 w-24 bg-muted rounded"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="aspect-square bg-muted rounded-xl w-full"></div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="h-10 w-3/4 bg-muted rounded"></div>
              <div className="h-6 w-1/4 bg-muted rounded"></div>
            </div>
            <div className="h-12 w-32 bg-muted rounded-full"></div>
            <div className="space-y-4 py-6 border-y">
              <div className="h-4 w-full bg-muted rounded"></div>
              <div className="h-4 w-full bg-muted rounded"></div>
              <div className="h-4 w-2/3 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !pet) {
    return (
      <div className="max-w-3xl mx-auto p-6 mt-12 border border-red-200 bg-red-50 text-red-600 rounded-lg flex flex-col items-center text-center">
        <AlertCircle className="h-10 w-10 mb-4" />
        <h2 className="text-xl font-bold mb-2">Failed to load pet details</h2>
        <p className="mb-6">{error || 'Pet not found'}</p>
        <div className="flex gap-4">
          <Link href="/pets" className="px-4 py-2 bg-white border border-red-200 rounded-md shadow-sm font-medium hover:bg-gray-50 transition-colors">
            Back to Pets
          </Link>
          <button 
            onClick={() => refetch()}
            className="px-4 py-2 bg-red-600 text-white rounded-md shadow-sm font-medium hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const primaryImage = pet.images?.find(img => img.is_primary)?.storage_path || pet.images?.[0]?.storage_path;
  const imageUrl = primaryImage ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/pets/${primaryImage}` : 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop';

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      <Link href="/pets" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 group transition-colors">
        <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
        Back to all pets
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery Column */}
        <div className="flex flex-col gap-4">
          <div className="aspect-square relative rounded-xl overflow-hidden bg-gray-100 border">
            <Image 
              src={imageUrl} 
              alt={`Photo of ${pet.name}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {pet.images && pet.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {pet.images.map((img) => (
                <div key={img.id} className={`aspect-square relative rounded-lg overflow-hidden bg-gray-100 border cursor-pointer hover:opacity-80 transition-opacity ${img.storage_path === primaryImage ? 'ring-2 ring-blue-500' : ''}`}>
                  <Image 
                    src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/pets/${img.storage_path}`}
                    alt="Thumbnail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 25vw, 12vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details Column */}
        <div className="flex flex-col">
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">{pet.name}</h1>
              <div className="text-2xl sm:text-3xl font-bold text-green-600">
                {formatCurrency(pet.price)}
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 mt-4 text-sm">
              <span className={`inline-flex items-center rounded-full border px-3 py-1 font-semibold ${
                pet.status === 'available' ? 'bg-green-50 text-green-700 border-green-200' : 
                pet.status === 'pending' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
                'bg-red-50 text-red-700 border-red-200'
              }`}>
                {pet.status.charAt(0).toUpperCase() + pet.status.slice(1)}
              </span>
              <span className="text-muted-foreground flex items-center">
                <Calendar className="h-4 w-4 mr-1.5" />
                Added {formatFullDate(pet.created_at)}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 py-6 border-y">
            <div className="flex items-start">
              <Tag className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-500">Breed</p>
                <p className="font-semibold text-gray-900">{pet.breed}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Calendar className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-500">Age</p>
                <p className="font-semibold text-gray-900">{pet.age_months} months</p>
              </div>
            </div>
            {pet.seller && (
              <>
                <div className="flex items-start">
                  <User className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Seller</p>
                    <p className="font-semibold text-gray-900">{pet.seller.full_name || 'Anonymous'}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900">{pet.seller.city || 'Not specified'}</p>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="py-6 space-y-4">
            <h3 className="text-lg font-semibold">About {pet.name}</h3>
            <div className="prose prose-sm sm:prose text-gray-600 max-w-none">
              {pet.description ? (
                <p className="whitespace-pre-wrap">{pet.description}</p>
              ) : (
                <p className="italic text-gray-400">No description provided.</p>
              )}
            </div>
          </div>

          <div className="mt-auto pt-6 border-t flex flex-col sm:flex-row gap-4">
            <button 
              className="flex-1 bg-blue-600 text-white h-12 rounded-xl font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              disabled={pet.status !== 'available'}
            >
              {pet.status === 'available' ? 'Contact Seller' : 'Not Available'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
