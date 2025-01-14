// // AddClientPage.tsx
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AddClientForm from './Addclientform';  // Make sure AddClientForm is correctly imported

// const AddClientPage = () => {
//   const navigate = useNavigate();
//   const [clients, setClients] = useState<any[]>([]);

//   const handleClientSubmit = (clientData: any) => {
//     const updatedClients = [...clients, clientData];
//     setClients(updatedClients);

//     localStorage.setItem('clients', JSON.stringify(updatedClients));

//     navigate('/');  // After submitting, navigate back to the main page (AddNewClient)
//   };

//   return (
//     <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
//       <h1 className="text-3xl font-semibold text-gray-800">Add New Client</h1>
//       <AddClientForm onSubmit={handleClientSubmit} />
//     </div>
//   );
// };

// export default AddClientPage;
