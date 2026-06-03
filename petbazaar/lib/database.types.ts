export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      pets: {
        Row: {
          id: string
          created_at: string
          name: string
          breed: string
          price: number
          age_months: number
          status: string
          description: string
          seller_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          breed: string
          price: number
          age_months: number
          status?: string
          description?: string
          seller_id: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          breed?: string
          price?: number
          age_months?: number
          status?: string
          description?: string
          seller_id?: string
        }
      }
      pet_images: {
        Row: {
          id: string
          created_at: string
          pet_id: string
          url: string
          is_primary: boolean
          storage_path: string
        }
        Insert: {
          id?: string
          created_at?: string
          pet_id: string
          url: string
          is_primary?: boolean
          storage_path: string
        }
        Update: {
          id?: string
          created_at?: string
          pet_id?: string
          url?: string
          is_primary?: boolean
          storage_path?: string
        }
      }
      profiles: {
        Row: {
          id: string
          full_name: string
          city: string
          avatar_url?: string
        }
        Insert: {
          id: string
          full_name: string
          city: string
          avatar_url?: string
        }
        Update: {
          id?: string
          full_name?: string
          city?: string
          avatar_url?: string
        }
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}
