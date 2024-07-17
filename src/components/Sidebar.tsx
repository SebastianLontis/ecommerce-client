import { useEffect, useState } from 'react';
import axios from 'axios';

const Sidebar = () => {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="font-bold mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="mb-2">
            <a href={`/categories/${category.id}`} className="text-blue-600 hover:underline">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
