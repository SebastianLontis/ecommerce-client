
import React from 'react';
import { ProductCardProps } from '../Product/ProductCard.types';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-lg font-semibold">${product.price}</p>
    </div>
  );
};

export default ProductCard;
