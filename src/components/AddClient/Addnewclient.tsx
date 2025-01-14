// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa';

// interface Client {
//   clientType: 'Individual' | 'Business';
//   fullName: string;
//   firstName: string;
//   lastName: string;
//   telephone: string;
//   mobile: string;
//   streetAddress1: string;
//   streetAddress2: string;
//   city: string;
//   state: string;
//   postalCode: string;
//   country: string;
//   vatNumber: string;
//   codeNumber: string;
//   currency: string;
//   email: string;
//   category: string;
//   notes: string;
//   invoicingmethod: string;
// }

// const AddNewClient: React.FC = () => {
//   const navigate = useNavigate();
//   const [clients, setClients] = useState<Client[]>([]);

//   useEffect(() => {
//     const storedClients: Client[] = JSON.parse(
//       localStorage.getItem('clients') || '[]',
//     );
//     setClients(storedClients);
//   }, []);

//   const handleDelete = (index: number): void => {
//     const updatedClients = [...clients];
//     updatedClients.splice(index, 1);
//     setClients(updatedClients);

//     localStorage.setItem('clients', JSON.stringify(updatedClients));
//   };

//   const handleEdit = (index: number): void => {
//     navigate(`/EditClientForm/${index}`);
//   };

//   return (
//     <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-semibold text-gray-800">Add Clients</h1>
//         <button
//           className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700"
//           onClick={() => navigate('/Addclientform')}
//         >
//           + Add Client
//         </button>
//       </div>

//       <div className="overflow-x-auto bg-white shadow-md rounded-md">
//         <table className="w-full table-auto">
//           <thead className="bg-gray-100 border-b">
//             <tr>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">#</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Full Name</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Telephone</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Mobile</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Address</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">City</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Country</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {clients.length > 0 ? (
//               clients.map((client, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{client.fullName}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{client.email}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{client.telephone}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{client.mobile}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">
//                     {client.streetAddress1}, {client.streetAddress2}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{client.city}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{client.country}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">
//                     <button
//                       className="text-blue-500 hover:text-blue-600 mr-2"
//                       onClick={() => handleEdit(index)}
//                     >
//                       <FaEdit className="inline-block mr-1" />
//                     </button>
//                     <button
//                       className="text-red-500 hover:text-red-600"
//                       onClick={() => handleDelete(index)}
//                     >
//                       <FaTrashAlt className="inline-block mr-1" />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={9} className="px-6 py-4 text-center text-sm text-gray-500">
//                   No data available in table
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AddNewClient;





import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import AddClientForm from './Addclientform';

const AddnewClient = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState<any[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false); // To control form visibility

  useEffect(() => {
    const storedClients = localStorage.getItem('clients');
    if (storedClients) {
      setClients(JSON.parse(storedClients));
    } else {
      fetchClientsFromAPI();
    }
  }, []);

  const fetchClientsFromAPI = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/clients');
      const data = await response.json();
      setClients(data);
      localStorage.setItem('clients', JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const handleClientSubmit = async (clientData: any) => {
    const updatedClients = [...clients, clientData];
    setClients(updatedClients);

    await saveClientToDB(clientData);
    localStorage.setItem('clients', JSON.stringify(updatedClients));
    setIsFormVisible(false); // Hide form after submission
  };

  const saveClientToDB = async (clientData: any) => {
    try {
      const response = await fetch('http://localhost:5000/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
      });

      if (!response.ok) {
        throw new Error('Failed to save client to database');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = (index: number): void => {
    const updatedClients = [...clients];
    updatedClients.splice(index, 1);
    setClients(updatedClients);
    localStorage.setItem('clients', JSON.stringify(updatedClients));
  };

  const handleEdit = (index: number): void => {
    navigate(`/EditClientForm/${index}`);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Add Clients</h1>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700"
          onClick={() => setIsFormVisible(true)} 
        >
          + Add Client
        </button>
      </div>

      
      <AddClientForm onSubmit={handleClientSubmit} />
      

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
            {clients.length > 0 ? (
              clients.map((client, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{client.fullName}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{client.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{client.telephone}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{client.mobile}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {client.streetAddress1}, {client.streetAddress2}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{client.city}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{client.country}</td>
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

export default AddnewClient;
