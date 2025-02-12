import { type ReactNode } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuthContext();

  if (!user && !loading) {
    return <Navigate to={'/signin'} />;
  }

  return children;
};

export default ProtectedRoute;
