import {
  createContext,
  type ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Profile } from '../types/types';
import { useAuthContext } from './AuthContext';
import { supabase } from '../supabase/config';
import { Navigate } from 'react-router';
import { toast } from 'react-toastify';

export type ProfileContextType = {
  profile: Profile | null;
  loading: boolean;
  error: null | string;
  updateProfile: (
    name: string,
    email: string,
    matricNumber: string,
    department: string,
    phone: string
  ) => Promise<void>;
};

export const ProfileContext = createContext<ProfileContextType | undefined>(
  undefined
);
const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuthContext();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const updateProfile = async (
    name: string,
    email: string,
    matricNumber: string,
    phone: string,
    department: string
  ) => {
    setLoading(true);
    const { data, error } = await supabase
      .from('profiles')
      .update({
        name,
        matricNumber,
        email,
        phone,
        department,
      })
      .eq('user_id', user?.id)
      .select()
      .single();

    if (data) {
      setProfile((prevState) => ({
        ...prevState,
        name: data?.name,
        email: data?.email,
        matricNumber: data?.matricNumber,
        phone: data?.phone,
        user_id: data?.user_id,
        department: data?.department,
      }));
    }

    toast.success('Profile updated successfully');
    if (error) {
      toast.error(error.message || 'Failed to update profile');
      console.error('Profile update failed', error);
    }

    setLoading(false);
  };

  const fetchProfile = useCallback(async () => {
    try {
      if (!user) {
        return <Navigate to="/signin" />;
      }

      const { data, error: fetchError } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        setError(fetchError?.message);
        throw fetchError;
      }

      setProfile(data);
      setLoading(false);
    } catch (error) {
      console.error(
        'Profile fetch failed:',
        error instanceof Error && error.message
      );
    }
  }, [user]);

  useEffect(() => {
    fetchProfile();
  }, [user, fetchProfile]);

  return (
    <ProfileContext.Provider
      value={{ profile, loading: loading || !user, error, updateProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
