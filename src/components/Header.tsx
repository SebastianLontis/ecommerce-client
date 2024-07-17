import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">YourStore</Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login" className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded text-white">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
