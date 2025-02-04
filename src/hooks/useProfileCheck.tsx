// hooks/use-profile-check.js
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useProfile } from './useProfile';

export const useProfileCheck = () => {
  const navigate = useNavigate();
  const { profile, loading } = useProfile();
  const pathname = useLocation().pathname;
  useEffect(() => {
    if (!profile && !loading) navigate('profile');
  }, [profile, loading, navigate, pathname]);
};
