import React from 'react';

type ProductInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ProductInput: React.FC<ProductInputProps> = ({ label, name, value, onChange }) => {
  return (
    <>
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border p-2 rounded"
      />
    </div>
    </>
  );
};

export default ProductInput;
