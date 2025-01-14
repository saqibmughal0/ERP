import React from 'react';

interface Field {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
}

interface StockFormProps {
  title: string;
  logo: string;
  fields: Field[];
  onSubmit: (data: Record<string, any>) => void;
  buttons: { save: string; cancel: string };
}

const StockForm: React.FC<StockFormProps> = ({
  title,
  logo,
  fields,
  onSubmit,
  buttons,
}) => {
  const [formData, setFormData] = React.useState<Record<string, any>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded w-[50rem]">
      {/* Logo Section */}
      {logo && (
        <div className="flex justify-between items-center mb-4 bg-slate-50 p-2">
          <img
            src={logo}
            alt="Form Logo"
            className="h-30 w-30 object-contain"
          />
          <h2 className="text-xl font-bold mb-4 p-4">{title}</h2>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {' '}
          {/* Grid container */}
          {fields.map((field) => (
            <div key={field.name} className="flex flex-col">
              <label className="font-medium mb-1">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name] || ''}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-4 mt-4 justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {buttons.save}
          </button>
          <button type="button" className="bg-gray-300 px-4 py-2 rounded">
            {buttons.cancel}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StockForm;
