// Mock pets API calls - ready for Supabase integration
export interface Pet {
  id: number;
  name: string;
  breed: string;
  type: 'dog' | 'cat' | 'bird' | 'other';
  age: number;
  price: number;
  image: string;
  description: string;
  location: string;
  seller: string;
  sellerId: string;
  createdAt: string;
}

// Mock data for pets
const mockPets: Pet[] = [
  {
    id: 1,
    name: 'Golden Buddy',
    breed: 'Golden Retriever',
    type: 'dog',
    age: 2,
    price: 25000,
    image: 'https://images.unsplash.com/photo-1633722715463-d30628cqn07a?w=400&h=400&fit=crop',
    description: 'Friendly and energetic Golden Retriever. Great with families!',
    location: 'Mumbai, India',
    seller: 'Happy Pets Store',
    sellerId: '1',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: 'Whiskers',
    breed: 'Persian Cat',
    type: 'cat',
    age: 1,
    price: 8000,
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop',
    description: 'Beautiful Persian cat with soft fur. Perfect companion.',
    location: 'Bangalore, India',
    seller: 'Cat Paradise',
    sellerId: '2',
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: 'Max',
    breed: 'German Shepherd',
    type: 'dog',
    age: 3,
    price: 30000,
    image: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&h=400&fit=crop',
    description: 'Trained and loyal German Shepherd. Excellent guard dog.',
    location: 'Delhi, India',
    seller: 'Elite Dogs',
    sellerId: '3',
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    name: 'Sunny',
    breed: 'Cockatiel',
    type: 'bird',
    age: 1,
    price: 5000,
    image: 'https://images.unsplash.com/photo-1552053831-71594a27c62d?w=400&h=400&fit=crop',
    description: 'Cute and playful Cockatiel. Sings beautifully!',
    location: 'Pune, India',
    seller: 'Bird Haven',
    sellerId: '4',
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    name: 'Bella',
    breed: 'Labrador Retriever',
    type: 'dog',
    age: 2,
    price: 22000,
    image: 'https://images.unsplash.com/photo-1633722715463-d30628cq07a?w=400&h=400&fit=crop',
    description: 'Playful and loving Labrador. Great for families.',
    location: 'Hyderabad, India',
    seller: 'Pet Paradise',
    sellerId: '5',
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    name: 'Mimi',
    breed: 'Siamese Cat',
    type: 'cat',
    age: 1,
    price: 12000,
    image: 'https://images.unsplash.com/photo-1513360371669-4a0eb3c4be8f?w=400&h=400&fit=crop',
    description: 'Elegant Siamese cat with striking blue eyes.',
    location: 'Chennai, India',
    seller: 'Royal Cats',
    sellerId: '6',
    createdAt: new Date().toISOString(),
  },
];

export const petsModel = {
  // Get all pets
  async getAllPets(): Promise<Pet[]> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockPets;
  },

  // Get pet by ID
  async getPetById(id: number): Promise<Pet | null> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockPets.find(pet => pet.id === id) || null;
  },

  // Get pets by type
  async getPetsByType(type: string): Promise<Pet[]> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockPets.filter(pet => pet.type === type);
  },

  // Get seller's pets
  async getSellerPets(sellerId: string): Promise<Pet[]> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockPets.filter(pet => pet.sellerId === sellerId);
  },

  // Search pets
  async searchPets(query: string): Promise<Pet[]> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockPets.filter(pet =>
      pet.name.toLowerCase().includes(query.toLowerCase()) ||
      pet.breed.toLowerCase().includes(query.toLowerCase())
    );
  },

  // Create pet listing (seller)
  async createPet(pet: Omit<Pet, 'id' | 'createdAt'>): Promise<Pet> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    const newPet: Pet = {
      ...pet,
      id: Math.max(...mockPets.map(p => p.id)) + 1,
      createdAt: new Date().toISOString(),
    };
    mockPets.push(newPet);
    return newPet;
  },

  // Update pet listing
  async updatePet(id: number, updates: Partial<Pet>): Promise<Pet | null> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = mockPets.findIndex(pet => pet.id === id);
    if (index === -1) return null;
    mockPets[index] = { ...mockPets[index], ...updates };
    return mockPets[index];
  },

  // Delete pet listing
  async deletePet(id: number): Promise<boolean> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = mockPets.findIndex(pet => pet.id === id);
    if (index === -1) return false;
    mockPets.splice(index, 1);
    return true;
  },
};
