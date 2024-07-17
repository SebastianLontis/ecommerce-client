import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <h1 className="text-3xl font-bold mb-4">Welcome to YourStore</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Featured Products or Promotions */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Featured Product</h2>
              <p className="text-gray-600">Description of featured product.</p>
            </div>
            {/* Additional Content */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Promotion</h2>
              <p className="text-gray-600">Details about ongoing promotion.</p>
            </div>
            {/* Additional Content */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Latest Arrivals</h2>
              <p className="text-gray-600">Details about new arrivals.</p>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-gray-800 text-white py-4 px-4 text-center">
        <p>&copy; 2024 YourStore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
