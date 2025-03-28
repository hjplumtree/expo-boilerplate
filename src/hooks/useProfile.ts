import { useState, useEffect } from 'react';
import * as db from '../services/database';

export function useProfile(userId?: string) {
  const [profile, setProfile] = useState<db.Profile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    if (!userId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const data = await db.getProfile(userId);
      setProfile(data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch profile');
      console.error('Error fetching profile:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchProfile();
    }
  }, [userId]);

  const updateProfile = async (updates: Partial<db.Profile>) => {
    if (!userId) return null;
    
    setLoading(true);
    setError(null);
    
    try {
      const updatedProfile = await db.updateProfile(userId, updates);
      setProfile(updatedProfile);
      return updatedProfile;
    } catch (err: any) {
      setError(err.message || 'Failed to update profile');
      console.error('Error updating profile:', err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    profile,
    loading,
    error,
    fetchProfile,
    updateProfile,
  };
}
