'use client';

import { useState, useCallback } from 'react';
import { adminModel, type AdminStats, type AdminUser } from '../model/adminModel';

export const useAdminViewModel = () => {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await adminModel.getStats();
      setStats(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch stats';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await adminModel.getAllUsers();
      setUsers(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch users';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchListings = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await adminModel.getAllListings();
      setListings(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch listings';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateUserStatus = useCallback(async (userId: string, status: string) => {
    setLoading(true);
    setError(null);
    try {
      await adminModel.updateUserStatus(userId, status);
      setUsers(users.map(u => u.id === userId ? { ...u, status: status as any } : u));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update user';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [users]);

  const removeListing = useCallback(async (listingId: number) => {
    setLoading(true);
    setError(null);
    try {
      await adminModel.removeListing(listingId);
      setListings(listings.filter(l => l.id !== listingId));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to remove listing';
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
    users,
    listings,
    loading,
    error,
    fetchStats,
    fetchUsers,
    fetchListings,
    updateUserStatus,
    removeListing,
    clearError,
  };
};
