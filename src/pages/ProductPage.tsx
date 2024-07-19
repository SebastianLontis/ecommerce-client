import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/Product/ProductCard'; // Assuming the path is correct

// Assuming there's a type for Product
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

// Define an interface for environment variables for better type safety
interface ImportMetaEnv {
  readonly VITE_APP_API_BASE_URL: string;
}

// Assuming `id` is defined somewhere in this component, for example, from props or a hook
const id: string = 'someProductId'; // Placeholder, replace with actual logic to obtain id

const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${(import.meta.env as unknown as ImportMetaEnv).VITE_APP_API_BASE_URL}/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return product ? <ProductCard product={product} /> : <p>Product not found.</p>;
};

export default ProductPage;