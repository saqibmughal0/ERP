import React from 'react';
import ProductForm from './ProductForm';

const CreateProduct: React.FC = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold ">New Product</h1>
        <p>Create new product</p>
      </div>
      <div className="p-6 bg-white shadow-md rounded-md min-h-screen mt-5">
        <ProductForm />
      </div>
    </>
  );
};

export default CreateProduct;
