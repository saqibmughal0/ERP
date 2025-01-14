import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

interface Sales {
  clientType: 'Individual' | 'Business';
  fullName: string;
  firstName: string;
  lastName: string;
  telephone: string;
  mobile: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  vatNumber: string;
  codeNumber: string;
  currency: string;
  email: string;
  category: string;
  notes: string;
  invoicingmethod: string;
}

const Addnewsales: React.FC = () => {
  const navigate = useNavigate();
  const [sales, setSales] = useState<Sales[]>([]);

  useEffect(() => {
    const storedSales: Sales[] = JSON.parse(
      localStorage.getItem('sales') || '[]',
    );
    setSales(storedSales);
  }, []);

  const handleDelete = (index: number): void => {
    const updatedSales = [...sales];
    updatedSales.splice(index, 1);
    setSales(updatedSales);

    localStorage.setItem('sales', JSON.stringify(updatedSales));
  };

  const handleEdit = (index: number): void => {
    navigate(`/EditClientForm/${index}`);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Add Sales</h1>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700"
          onClick={() => navigate('/Addsalesform')}
        >
          + Add Sales
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-md">
        <table className="w-full table-auto">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">#</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Full Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Telephone</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Mobile</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Address</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">City</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Country</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sales.length > 0 ? (
              sales.map((sales, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{sales.fullName}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{sales.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{sales.telephone}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{sales.mobile}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {sales.streetAddress1}, {sales.streetAddress2}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{sales.city}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{sales.country}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <button
                      className="text-blue-500 hover:text-blue-600 mr-2"
                      onClick={() => handleEdit(index)}
                    >
                      <FaEdit className="inline-block mr-1" />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-600"
                      onClick={() => handleDelete(index)}
                    >
                      <FaTrashAlt className="inline-block mr-1" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9} className="px-6 py-4 text-center text-sm text-gray-500">
                  No data available in table
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Addnewsales;
