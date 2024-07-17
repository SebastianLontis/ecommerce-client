import axios from 'axios';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}login`, { email, password }
  );
    return response.data; 
  } catch (error) {
    throw Error('Login failed'); 
  }
};

export const register = async (name: string, password: string, email: string) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}register`, { name, password, email });
    return response.data; 
  } catch (error) {
    throw Error('Registration failed'); 
  }
};
