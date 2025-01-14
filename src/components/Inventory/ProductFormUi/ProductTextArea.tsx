import React from 'react';

type ProductTextAreaProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const ProductTextArea: React.FC<ProductTextAreaProps> = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border p-2 h-40 rounded outline-none"
      ></textarea>
    </div>
  );
};

export default ProductTextArea;
