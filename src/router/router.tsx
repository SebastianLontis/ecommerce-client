import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import HomePage from '../pages/HomePage';
import Dashboard from '../pages/Dashboard';
import AccountPage from '../pages/AccountPage';
import ProtectedRoute from '../services/ProtectedRoute';
import ProductPage from '../pages/ProductPage';

export default createBrowserRouter([
  {
    path: '/homepage',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute adminOnly>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/account',
    element: (
      <ProtectedRoute>
        <AccountPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/product/:id',
    element: <ProductPage />,
  },
]);