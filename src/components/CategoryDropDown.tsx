import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Category {
  id: number;
  name: string;
  slug: string;
}

const CategoryDropdown = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log('Fetching categories from:', `${import.meta.env.VITE_APP_API_BASE_URL}/categories`);
        const response = await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="hover:text-gray-400">Categories</button>
      {isOpen && (
        <div className="absolute bg-gray-700 text-white rounded shadow-lg mt-2">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${category.slug}`} 
              className="block px-4 py-2 hover:bg-gray-600"
            >
              {category.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
