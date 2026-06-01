'use client';

import { useState, useCallback, useEffect } from 'react';
import { petsModel, type Pet } from '../model/petsModel';

export const usePetsViewModel = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all pets on mount
  const fetchAllPets = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await petsModel.getAllPets();
      setPets(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch pets';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch single pet
  const fetchPetById = useCallback(async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await petsModel.getPetById(id);
      setSelectedPet(data);
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch pet';
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Search pets
  const searchPets = useCallback(async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await petsModel.searchPets(query);
      setPets(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Search failed';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Filter by type
  const filterByType = useCallback(async (type: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await petsModel.getPetsByType(type);
      setPets(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Filter failed';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    pets,
    selectedPet,
    loading,
    error,
    fetchAllPets,
    fetchPetById,
    searchPets,
    filterByType,
    clearError,
  };
};
