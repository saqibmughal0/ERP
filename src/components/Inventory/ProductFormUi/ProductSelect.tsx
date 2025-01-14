import React from 'react';

type ProductSelectProps = {
  label: string;
  name: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const ProductSelect: React.FC<ProductSelectProps> = ({ label, name, value, options, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border p-2 rounded"
      >
        <option value="">Choose</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductSelect;
