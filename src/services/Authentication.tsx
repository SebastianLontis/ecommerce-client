import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api'; 

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data; 
  } catch (error) {
    throw Error('Login failed'); 
  }
};

export const register = async (username: string, password: string, email: string) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, password, email });
    return response.data; 
  } catch (error) {
    throw Error('Registration failed'); 
  }
};
