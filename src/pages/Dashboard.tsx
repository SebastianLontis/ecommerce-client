import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import AddProductForm from '../components/AddProductForm';
import EditProductForm from '../components/EditProductForm';

interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  const Dashboard: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
    return (
      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="flex">
          <div className="w-1/2">
            <ProductList setSelectedProduct={setSelectedProduct} />
          </div>
          <div className="w-1/2">
            {selectedProduct ? (
              <EditProductForm product={selectedProduct} setSelectedProduct={setSelectedProduct} />
            ) : (
              <AddProductForm />
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;