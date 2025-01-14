// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import axios from 'axios';

// interface FormData {
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
//   ntnNumber: string;
//   idCardNumber: string;
//   whatsApp: string;
//   address: string;
//   website: string;
//   supplierID: string;
//   openingBalance: string;
//   openingBalanceDate: string;
//   attachment: File | null;
// }

// const ManageSupplierForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     fullName: '',
//     firstName: '',
//     lastName: '',
//     telephone: '',
//     mobile: '',
//     streetAddress1: '',
//     streetAddress2: '',
//     city: '',
//     state: '',
//     postalCode: '',
//     country: 'Pakistan (PK)',
//     vatNumber: '',
//     codeNumber: '000001',
//     currency: 'PKR Pakistani Rupee',
//     email: '',
//     category: '',
//     notes: '',
//     invoicingmethod: '',
//     ntnNumber: '',
//     idCardNumber: '',
//     whatsApp: '',
//     address: '',
//     website: '',
//     supplierID: 'Auto-Generated',
//     openingBalance: '',
//     openingBalanceDate: '',
//     attachment: null,
//   });

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         'http://localhost:5000/api/supplier',
//         formData,
//       );
//       if (response.status === 200) {
//         alert('Supplier added successfully!');
//         setFormData({
//           fullName: '',
//           firstName: '',
//           lastName: '',
//           telephone: '',
//           mobile: '',
//           streetAddress1: '',
//           streetAddress2: '',
//           city: '',
//           state: '',
//           postalCode: '',
//           country: 'Pakistan (PK)',
//           vatNumber: '',
//           codeNumber: '000001',
//           currency: 'PKR Pakistani Rupee',
//           email: '',
//           category: '',
//           notes: '',
//           invoicingmethod: '',
//           ntnNumber: '',
//           idCardNumber: '',
//           whatsApp: '',
//           address: '',
//           website: '',
//           supplierID: 'Auto-Generated',
//           openingBalance: '',
//           openingBalanceDate: '',
//           attachment: null,
//         });
//       }
//     } catch (error) {
//       console.error('There was an error!', error);
//       alert('Failed to add supplier.');
//     }
//   };

//   return (
//     <div className="p-8 bg-white rounded-lg shadow-xl max-w-4xl mx-auto mt-10">
//       <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
//         Add Supplier
//       </h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
        
//         {/* Full Name */}
//         <div>
//           <label className="block text-lg font-medium text-gray-700">
//             Full Name / Business Name *
//           </label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             placeholder="Enter full name or business name"
//             className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* First Name & Last Name */}
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <label className="block text-lg font-medium text-gray-700">
//               First Name
//             </label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               placeholder="First Name"
//               className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-lg font-medium text-gray-700">
//               Last Name
//             </label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               placeholder="Last Name"
//               className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block text-lg font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Address */}
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <label className="block text-lg font-medium text-gray-700">
//               Street Address 1
//             </label>
//             <input
//               type="text"
//               name="streetAddress1"
//               value={formData.streetAddress1}
//               onChange={handleChange}
//               placeholder="Street Address 1"
//               className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-lg font-medium text-gray-700">
//               Street Address 2
//             </label>
//             <input
//               type="text"
//               name="streetAddress2"
//               value={formData.streetAddress2}
//               onChange={handleChange}
//               placeholder="Street Address 2"
//               className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         {/* City, State, Postal Code */}
//         <div className="grid grid-cols-3 gap-6">
//           <div>
//             <label className="block text-lg font-medium text-gray-700">
//               City
//             </label>
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               placeholder="City"
//               className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-lg font-medium text-gray-700">
//               State
//             </label>
//             <input
//               type="text"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               placeholder="State"
//               className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-lg font-medium text-gray-700">
//               Postal Code
//             </label>
//             <input
//               type="text"
//               name="postalCode"
//               value={formData.postalCode}
//               onChange={handleChange}
//               placeholder="Postal Code"
//               className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <label className="block text-lg font-medium text-gray-700">
//               Telephone
//             </label>
//             <input
//               type="text"
//               name="telephone"
//               value={formData.telephone}
//               onChange={handleChange}
//               placeholder="Telephone"
//               className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-lg font-medium text-gray-700">
//               Mobile
//             </label>
//             <input
//               type="text"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               placeholder="Mobile"
//               className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         {/* Category & Invoicing Method */}
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <label className="block text-lg font-medium text-gray-700">
//               Category
//             </label>
//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="" disabled>
//                 Select an option
//               </option>
//               <option value="option1">Option 1</option>
//               <option value="option2">Option 2</option>
//               <option value="option3">Option 3</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-lg font-medium text-gray-700">
//               Invoicing Method
//             </label>
//             <select
//               name="invoicingmethod"
//               value={formData.invoicingmethod}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="" disabled>
//                 Select an option
//               </option>
//               <option value="option1">Print (Offline)</option>
//               <option value="option2">Send via Email</option>
//             </select>
//           </div>
//         </div>
//         {/* NTN Number */}
//         <div>
//           <label className="block text-lg font-medium text-gray-700">
//             NTN Number
//           </label>
//           <input
//             type="text"
//             name="ntnNumber"
//             value={formData.ntnNumber}
//             onChange={handleChange}
//             placeholder="Enter NTN number"
//             className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* ID Card Number */}
//         <div>
//           <label className="block text-lg font-medium text-gray-700">
//             ID Card Number
//           </label>
//           <input
//             type="text"
//             name="idCardNumber"
//             value={formData.idCardNumber}
//             onChange={handleChange}
//             placeholder="Enter ID Card number"
//             className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* WhatsApp */}
//         <div>
//           <label className="block text-lg font-medium text-gray-700">
//             WhatsApp
//           </label>
//           <input
//             type="text"
//             name="whatsApp"
//             value={formData.whatsApp}
//             onChange={handleChange}
//             placeholder="Enter WhatsApp number"
//             className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Address */}
//         <div>
//           <label className="block text-lg font-medium text-gray-700">
//             Address
//           </label>
//           <textarea
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             placeholder="Enter address"
//             className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Website */}
//         <div>
//           <label className="block text-lg font-medium text-gray-700">
//             Website
//           </label>
//           <input
//             type="url"
//             name="website"
//             value={formData.website}
//             onChange={handleChange}
//             placeholder="Enter website URL"
//             className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Supplier ID */}
//         <div>
//           <label className="block text-lg font-medium text-gray-700">
//             Supplier ID
//           </label>
//           <input
//             type="text"
//             name="supplierID"
//             value={formData.supplierID}
//             readOnly
//             className="border border-gray-300 rounded-md p-3 w-full mt-2 bg-gray-100 shadow-sm focus:outline-none"
//           />
//         </div>

//         {/* Opening Balance */}
//         <div>
//           <label className="block text-lg font-medium text-gray-700">
//             Opening Balance
//           </label>
//           <input
//             type="text"
//             name="openingBalance"
//             value={formData.openingBalance}
//             onChange={handleChange}
//             placeholder="Enter opening balance"
//             className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Opening Balance Date */}
//         <div>
//           <label className="block text-lg font-medium text-gray-700">
//             Opening Balance Date
//           </label>
//           <input
//             type="date"
//             name="openingBalanceDate"
//             value={formData.openingBalanceDate}
//             onChange={handleChange}
//             className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="text-end mt-6">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
//           >
//             Add Supplier
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ManageSupplierForm;


import { useState } from 'react';
import axios from 'axios';


function ManageSupplierForm() {
  const [formData, setFormData] = useState({
       fullName: '',
    firstName: '',
    lastName: '',
    telephone: '',
    mobile: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'Pakistan (PK)',
    vatNumber: '',
    codeNumber: '000001',
    currency: 'PKR Pakistani Rupee',
    email: '',
    category: '',
    notes: '',
    invoicingmethod: '',
    ntnNumber: '',
    idCardNumber: '',
    whatsApp: '',
    address: '',
    website: '',
    supplierID: 'Auto-Generated',
    openingBalance: '',
    openingBalanceDate: '',
    attachment: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/supplier', formData);
    } catch (error) {
      console.error('Error adding supplier:', error);
    }
  };

  return (
    <div>
      <h2>Add New Supplier</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Supplier ID</label>
          <input
            type="text"
            name="supplierID"
            value={formData.supplierID}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Supplier</button>
      </form>
    </div>
  );
}

export default ManageSupplierForm;

