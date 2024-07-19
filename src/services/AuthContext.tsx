import { createContext, useContext, useEffect } from 'react';
import { useAtom } from 'jotai';
import { isLoggedInAtom, userAtom } from '../atoms/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext<{
  isLoggedIn: boolean;
  user: null;
  login: (email: any, password: any) => Promise<void>;
  register: (name: any, email: any, password: any) => Promise<void>;
  logout: () => Promise<void>;
  isAdmin: boolean;
  loading: boolean;
} | null>(null);

import { ReactNode } from 'react';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [user, setUser] = useAtom(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/user`, { withCredentials: true });
        if (response.status === 200) {
          setIsLoggedIn(true);
          setUser(response.data);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        setIsLoggedIn(false);
      }
    };

    checkAuthStatus();
  }, [setIsLoggedIn, setUser]);

  const login = async (email: any, password: any) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}/login`, { email, password });
      if (response.status === 200) {
        setIsLoggedIn(true);
        setUser(response.data.user);
        if (response.data.user.is_admin) {
          navigate('/dashboard');
        } else {
          navigate('/homepage');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const register = async (name: any, email: any, password: any) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}/register`, { name, email, password });
      if (response.status === 201) {
        setIsLoggedIn(true);
        setUser(response.data.user);
        navigate('/homepage');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}/logout`);
      setIsLoggedIn(false);
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, register, logout, isAdmin: false, loading: false }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
