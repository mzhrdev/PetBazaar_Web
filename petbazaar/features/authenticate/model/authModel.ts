// Mock auth API calls - ready for Supabase integration
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  name: string;
  role: 'buyer' | 'seller' | 'admin';
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'buyer' | 'seller' | 'admin';
  createdAt: string;
}

export const authModel = {
  // Mock login - will be replaced with real Supabase call
  async login(credentials: LoginCredentials): Promise<User> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      id: '1',
      email: credentials.email,
      name: 'John Doe',
      role: 'buyer',
      createdAt: new Date().toISOString(),
    };
  },

  // Mock register - will be replaced with real Supabase call
  async register(credentials: RegisterCredentials): Promise<User> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      id: Date.now().toString(),
      email: credentials.email,
      name: credentials.name,
      role: credentials.role,
      createdAt: new Date().toISOString(),
    };
  },

  // Mock logout
  async logout(): Promise<void> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
  },

  // Mock get current user
  async getCurrentUser(): Promise<User | null> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    return null; // Not logged in by default
  },
};
