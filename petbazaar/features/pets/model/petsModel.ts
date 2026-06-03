import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '@/lib/database.types';

export type Pet = Database['public']['Tables']['pets']['Row'];
export type PetImage = Database['public']['Tables']['pet_images']['Row'];
export type Profile = Database['public']['Tables']['profiles']['Row'];

export interface PetWithDetails extends Pet {
  images: PetImage[];
  seller: Pick<Profile, 'id' | 'full_name' | 'city'> | null;
}

export const getPets = async (
  supabase: SupabaseClient<Database>,
  filters?: { status?: Pet['status']; breed?: string }
): Promise<PetWithDetails[]> => {
  let query = supabase
    .from('pets')
    .select(`
      *,
      images:pet_images(*),
      seller:profiles(id, full_name, city)
    `)
    .order('created_at', { ascending: false });

  if (filters?.status) {
    query = query.eq('status', filters.status);
  }
  if (filters?.breed) {
    query = query.eq('breed', filters.breed);
  }

  const { data, error } = await query;
  
  if (error) {
    throw new Error(`Failed to fetch pets: ${error.message}`);
  }
  
  return (data as any[]).map((pet) => ({
    ...pet,
    seller: Array.isArray(pet.seller) ? pet.seller[0] : pet.seller,
  })) as PetWithDetails[];
};

export const getPetById = async (
  supabase: SupabaseClient<Database>,
  id: string
): Promise<PetWithDetails | null> => {
  const { data, error } = await supabase
    .from('pets')
    .select(`
      *,
      images:pet_images(*),
      seller:profiles(id, full_name, city)
    `)
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null; // Not found
    throw new Error(`Failed to fetch pet: ${error.message}`);
  }

  return {
    ...(data as any),
    seller: Array.isArray((data as any).seller) ? (data as any).seller[0] : (data as any).seller,
  } as PetWithDetails;
};
