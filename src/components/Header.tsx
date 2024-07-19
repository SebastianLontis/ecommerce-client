import { Link } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';
import CategoryDropdown from './CategoryDropDown';

const Header = () => {
  const auth = useAuth();
  const user = auth && auth.user ? auth.user as { is_admin: boolean } : null;
  const logout = auth ? auth.logout : null;

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">RunnersStore</Link>
        </div>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <CategoryDropdown />
          <Link to="/products" className="hover:text-gray-400">Products</Link>
          {user ? (
            <>
              {user.is_admin && <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>}
              <Link to="/account" className="hover:text-gray-400">Account</Link>
              <button onClick={logout || (() => {})} className="bg-red-500 hover:bg-red-600 py-2 px-4 rounded text-white">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-400">Login</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
