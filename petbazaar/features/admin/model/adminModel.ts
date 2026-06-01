// Mock admin API calls - ready for Supabase integration
export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
  status: 'active' | 'inactive' | 'banned';
  createdAt: string;
}

export interface AdminStats {
  totalUsers: number;
  totalListings: number;
  totalRevenue: number;
  newUsersThisMonth: number;
}

export const adminModel = {
  // Get admin stats
  async getStats(): Promise<AdminStats> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
      totalUsers: 1250,
      totalListings: 345,
      totalRevenue: 1200000,
      newUsersThisMonth: 120,
    };
  },

  // Get all users
  async getAllUsers(): Promise<AdminUser[]> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 400));
    return [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'buyer',
        status: 'active',
        createdAt: '2024-01-15',
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'seller',
        status: 'active',
        createdAt: '2024-02-10',
      },
      {
        id: '3',
        name: 'Bob Wilson',
        email: 'bob@example.com',
        role: 'buyer',
        status: 'inactive',
        createdAt: '2024-01-05',
      },
    ];
  },

  // Get all listings
  async getAllListings(): Promise<any[]> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 400));
    return [
      {
        id: 1,
        name: 'Golden Buddy',
        seller: 'Happy Pets Store',
        status: 'active',
        price: 25000,
        createdAt: '2024-03-01',
      },
      {
        id: 2,
        name: 'Whiskers',
        seller: 'Cat Paradise',
        status: 'active',
        price: 8000,
        createdAt: '2024-03-05',
      },
    ];
  },

  // Update user status
  async updateUserStatus(userId: string, status: string): Promise<AdminUser> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
      id: userId,
      name: 'User Name',
      email: 'user@example.com',
      role: 'buyer',
      status: status as 'active' | 'inactive' | 'banned',
      createdAt: new Date().toISOString(),
    };
  },

  // Remove listing
  async removeListing(listingId: number): Promise<boolean> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    return true;
  },
};
