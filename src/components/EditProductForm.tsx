import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface EditProductFormProps {
  product: Product;
  setSelectedProduct: (product: Product | null) => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({ product, setSelectedProduct }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  useEffect(() => {
    setName(product.name);
    setPrice(product.price);
  }, [product]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await axios.put(`${import.meta.env.VITE_APP_API_BASE_URL}products/${product.id}`, { name, price });
    setSelectedProduct(null);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductForm;
