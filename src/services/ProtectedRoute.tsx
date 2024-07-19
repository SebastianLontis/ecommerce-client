import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from '../atoms/auth';
import { useAuth } from '../services/AuthContext';


const ProtectedRoute: React.FC<{ children: React.ReactNode; adminOnly?: boolean }> = ({ children, adminOnly }) => {
  const [isLoggedIn] = useAtom(isLoggedInAtom);
  const { isAdmin, loading } = useAuth() || { isAdmin: false };

  if (loading) {
      return <div>Loading...</div>;
  }
  
  if (!isLoggedIn || (adminOnly && !isAdmin)) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
