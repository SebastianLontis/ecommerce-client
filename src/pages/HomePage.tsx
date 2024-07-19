import Header from '../components/Header';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-6 container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Welcome to RunnersStore</h1>
        <section className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
        <img src="https://unsplash.com/photos/3ZUsNJhi_Ik" alt="Running Shoes" className="w-full h-64 object-cover rounded-md mb-4"/>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">About Us</h2>
          <p className="text-gray-600 mb-4">
            Welcome to RunnersStore, where we bring you the best selection of [products/services]. Our mission is to provide high-quality items that meet your needs and exceed your expectations. Whether you’re looking for [specific types of products] or just browsing for inspiration, we’re here to help you find what you’re looking for.
          </p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-300">Learn More</button>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-4 px-6 text-center">
        <p>&copy; 2024 Runners. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
