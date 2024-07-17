import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to Our Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Featured Product</h2>
          <Link to="/product/1" className="block text-indigo-500 hover:underline">Product 1</Link>
          <p className="mt-2 text-gray-600">Description of Product 1.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Featured Product</h2>
          <Link to="/product/2" className="block text-indigo-500 hover:underline">Product 2</Link>
          <p className="mt-2 text-gray-600">Description of Product 2.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Featured Product</h2>
          <Link to="/product/3" className="block text-indigo-500 hover:underline">Product 3</Link>
          <p className="mt-2 text-gray-600">Description of Product 3.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
