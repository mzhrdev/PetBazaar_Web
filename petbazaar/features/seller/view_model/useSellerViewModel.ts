'use client';

import { useState, useCallback } from 'react';
import { sellerModel, type SellerStats, type PetListing } from '../model/sellerModel';

export const useSellerViewModel = () => {
  const [stats, setStats] = useState<SellerStats | null>(null);
  const [listings, setListings] = useState<PetListing[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async (sellerId: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await sellerModel.getSellerStats(sellerId);
      setStats(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch stats';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchListings = useCallback(async (sellerId: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await sellerModel.getSellerListings(sellerId);
      setListings(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch listings';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  const createListing = useCallback(async (data: any) => {
    setLoading(true);
    setError(null);
    try {
      const newListing = await sellerModel.createListing(data);
      setListings([...listings, newListing]);
      return newListing;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create listing';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [listings]);

  const deleteListing = useCallback(async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      await sellerModel.deleteListing(id);
      setListings(listings.filter(l => l.id !== id));
      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete listing';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [listings]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    stats,
    listings,
    loading,
    error,
    fetchStats,
    fetchListings,
    createListing,
    deleteListing,
    clearError,
  };
};
