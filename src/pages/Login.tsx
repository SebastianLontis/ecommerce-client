import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../services/AuthContext';

const LoginPage = () => {
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      if (auth) {
        await auth.login(email, password);
      }
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
        />
        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 p-2 rounded text-white">Login</button>
        <p className="mt-4">
          Don't have an account yet? <Link to="/register" className="text-indigo-400 hover:underline">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
