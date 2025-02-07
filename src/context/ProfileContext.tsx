import { createContext, type ReactNode, useEffect, useState } from 'react';
import { Profile } from '../types/types';
import { useAuthContext } from './AuthContext';
import { supabase } from '../supabase/config';
import { Navigate } from 'react-router';

export type ProfileContextType = {
  profile: Profile | null;
  loading: boolean;
  error: null | string;
  //   handleSignOut: () => void;
};

export const ProfileContext = createContext<ProfileContextType | undefined>(
  undefined
);
const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuthContext();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!user) {
          return <Navigate to="/signin" />;
        }

        const { data, error: fetchError } = await supabase
          .from('students')
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
    };
    fetchProfile();
  }, [user]);

  return (
    <ProfileContext.Provider
      value={{ profile, loading: loading || !user, error }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
