'use client';

import React from 'react';
import Link from 'next/link';
import { Button, PetCard } from '@/shared/components';
import { petsModel, type Pet } from '@/features/pets/model/petsModel';

export default function Home() {
  const [pets, setPets] = React.useState<Pet[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetch = async () => {
      const data = await petsModel.getAllPets();
      setPets(data.slice(0, 6)); // Show 6 featured pets
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Welcome to PetBazaar 🐾
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
            Find your perfect pet companion or list your beloved pets for adoption
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/pets">
              <Button size="lg" variant="ghost" className="text-base font-semibold">
                Browse Pets
              </Button>
            </Link>
            <Link href="/seller/add-pet">
              <Button size="lg" variant="primary" className="text-base font-semibold bg-white text-green-600 hover:bg-gray-50">
                Sell a Pet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Featured Pets</h2>
          <p className="text-gray-600 text-lg">Discover some of our latest listings</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-xl h-80 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
        )}

        <div className="text-center mt-12">
          <Link href="/pets">
            <Button size="lg">View All Pets</Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Why Choose PetBazaar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-md transition-shadow duration-200">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted & Safe</h3>
              <p className="text-gray-600 text-base leading-relaxed">Verified sellers and buyers for a secure marketplace</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-md transition-shadow duration-200">
              <div className="text-5xl mb-4">🐾</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wide Selection</h3>
              <p className="text-gray-600 text-base leading-relaxed">Browse dogs, cats, birds, and more from around the country</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-md transition-shadow duration-200">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Communication</h3>
              <p className="text-gray-600 text-base leading-relaxed">Connect directly with sellers to ask questions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
