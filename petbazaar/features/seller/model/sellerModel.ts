// Mock seller API calls - ready for Supabase integration
export interface SellerStats {
  totalListings: number;
  activePets: number;
  soldPets: number;
  totalEarnings: number;
}

export interface PetListing {
  id: number;
  name: string;
  breed: string;
  price: number;
  status: 'active' | 'sold' | 'inactive';
  image: string;
  createdAt: string;
}

export const sellerModel = {
  // Get seller stats
  async getSellerStats(sellerId: string): Promise<SellerStats> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
      totalListings: 12,
      activePets: 8,
      soldPets: 4,
      totalEarnings: 350000,
    };
  },

  // Get seller's listings
  async getSellerListings(sellerId: string): Promise<PetListing[]> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      {
        id: 1,
        name: 'Golden Buddy',
        breed: 'Golden Retriever',
        price: 25000,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1633722715463-d30628cqn07a?w=200&h=200&fit=crop',
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        name: 'Max',
        breed: 'German Shepherd',
        price: 30000,
        status: 'active',
        image: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=200&h=200&fit=crop',
        createdAt: new Date().toISOString(),
      },
      {
        id: 3,
        name: 'Buddy',
        breed: 'Beagle',
        price: 15000,
        status: 'sold',
        image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=200&h=200&fit=crop',
        createdAt: new Date().toISOString(),
      },
    ];
  },

  // Create new listing
  async createListing(data: any): Promise<PetListing> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      id: Date.now(),
      name: data.name,
      breed: data.breed,
      price: data.price,
      status: 'active',
      image: data.image,
      createdAt: new Date().toISOString(),
    };
  },

  // Update listing
  async updateListing(id: number, data: any): Promise<PetListing> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 400));
    return {
      id,
      ...data,
      createdAt: new Date().toISOString(),
    };
  },

  // Delete listing
  async deleteListing(id: number): Promise<boolean> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    return true;
  },
};
