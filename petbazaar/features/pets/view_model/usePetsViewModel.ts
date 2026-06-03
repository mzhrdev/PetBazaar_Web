import { useState, useCallback, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { getPets, getPetById, PetWithDetails } from '../model/petsModel';


export function usePetsViewModel(initialFilters?: { status?: 'available' | 'pending' | 'sold'; breed?: string }) {
  const [pets, setPets] = useState<PetWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const supabase = createClient();

  const fetchPets = useCallback(async (filters?: { status?: 'available' | 'pending' | 'sold'; breed?: string }) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getPets(supabase, filters);
      setPets(data);
    } catch (err: any) {
      setError(err.message || 'An error occurred while fetching pets');
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    fetchPets(initialFilters);
  }, [fetchPets, JSON.stringify(initialFilters)]);

  return {
    pets,
    loading,
    error,
    refetch: fetchPets,
  };
}

export function usePetDetailsViewModel(id: string) {
  const [pet, setPet] = useState<PetWithDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const supabase = createClient();

  const fetchPet = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getPetById(supabase, id);
      if (!data) {
        setError('Pet not found');
      } else {
        setPet(data);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred while fetching pet details');
    } finally {
      setLoading(false);
    }
  }, [supabase, id]);

  useEffect(() => {
    if (id) {
      fetchPet();
    }
  }, [fetchPet, id]);

  return {
    pet,
    loading,
    error,
    refetch: fetchPet,
  };
}
