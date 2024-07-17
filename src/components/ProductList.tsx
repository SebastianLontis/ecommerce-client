import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductListProps {
  setSelectedProduct: (product: Product | null) => void;
}

const ProductList: React.FC<ProductListProps> = ({ setSelectedProduct }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}products`);
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    await axios.delete(`${import.meta.env.VITE_APP_API_BASE_URL}products/${id}`);
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id} className="flex justify-between mb-2">
            <span>{product.name} - ${product.price}</span>
            <div>
              <button
                className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded"
                onClick={() => setSelectedProduct(product)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
