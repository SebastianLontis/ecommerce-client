
import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCardProps } from '../Product/ProductCard.types';

const ProductCard: React.FC<ProductCardProps> = ({ productId, productName, description }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Featured Product</h2>
      <Link to={`/product/${productId}`} className="block text-indigo-500 hover:underline">{productName}</Link>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default ProductCard;
