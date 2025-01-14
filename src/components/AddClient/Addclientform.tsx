// import React, { useState, ChangeEvent, FormEvent } from 'react';

// interface FormData {
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

// const AddClientForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     clientType: 'Individual',
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
//   });

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const storedClients: FormData[] = JSON.parse(localStorage.getItem('clients') || '[]');
//     localStorage.setItem('clients', JSON.stringify([...storedClients, formData]));

//     setFormData({
//       clientType: 'Individual',
//       fullName: '',
//       firstName: '',
//       lastName: '',
//       telephone: '',
//       mobile: '',
//       streetAddress1: '',
//       streetAddress2: '',
//       city: '',
//       state: '',
//       postalCode: '',
//       country: 'Pakistan (PK)',
//       vatNumber: '',
//       codeNumber: '000001',
//       currency: 'PKR Pakistani Rupee',
//       email: '',
//       category: '',
//       notes: '',
//       invoicingmethod: '',
//     });
//   };

//   return (
//     <div className="p-8 bg-white rounded-lg shadow-xl max-w-4xl mx-auto mt-10">
//       <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Add Client</h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Client Type */}
//         <div>
//           <label className="block text-lg font-medium text-gray-700">Client Type</label>
//           <div className="flex items-center gap-8 mt-2">
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="clientType"
//                 value="Individual"
//                 checked={formData.clientType === 'Individual'}
//                 onChange={handleChange}
//                 className="mr-2 text-blue-500"
//               />
//               Individual
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="clientType"
//                 value="Business"
//                 checked={formData.clientType === 'Business'}
//                 onChange={handleChange}
//                 className="mr-2 text-blue-500"
//               />
//               Business
//             </label>
//           </div>
//         </div>

//         {/* Full Name */}
//         <div>
//           <label className="block text-lg font-medium text-gray-700">Business Name *</label>
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
//             <label className="block text-lg font-medium text-gray-700">First Name</label>
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
//             <label className="block text-lg font-medium text-gray-700">Last Name</label>
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
//           <label className="block text-lg font-medium text-gray-700">Email</label>
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
//             <label className="block text-lg font-medium text-gray-700">Street Address 1</label>
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
//             <label className="block text-lg font-medium text-gray-700">Street Address 2</label>
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
//             <label className="block text-lg font-medium text-gray-700">City</label>
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
//             <label className="block text-lg font-medium text-gray-700">State</label>
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
//             <label className="block text-lg font-medium text-gray-700">Postal Code</label>
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
//             <label className="block text-lg font-medium text-gray-700">Telephone</label>
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
//             <label className="block text-lg font-medium text-gray-700">Mobile</label>
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
//             <label className="block text-lg font-medium text-gray-700">Category</label>
//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="" disabled>Select an option</option>
//               <option value="option1">Option 1</option>
//               <option value="option2">Option 2</option>
//               <option value="option3">Option 3</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-lg font-medium text-gray-700">Invoicing Method</label>
//             <select
//               name="invoicingmethod"
//               value={formData.invoicingmethod}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="" disabled>Select an option</option>
//               <option value="option1">Print (Offline)</option>
//               <option value="option2">Send via Email</option>
//             </select>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="text-end mt-6">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
//           >
//             Add Client
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddClientForm;

// AddNewClientForm.tsx

import React, { useState } from 'react';

const Addclientform = ({
  onSubmit,
}: {
  onSubmit: (clientData: any) => void;
}) => {
  const [client, setClient] = useState({
    clientType: '',
    fullName: '',
    firstName: '',
    lastName: '',
    email: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: '',
    postalCode: '',
    telephone: '',
    mobile: '',
    category: '',
    invoicingmethod: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClient({
      ...client,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(client); // Send data to AddNewClient component
    setClient({
      clientType: '',
      fullName: '',
      firstName: '',
      lastName: '',
      email: '',
      streetAddress1: '',
      streetAddress2: '',
      city: '',
      state: '',
      postalCode: '',
      telephone: '',
      mobile: '',
      category: '',
      invoicingmethod: '',
    });
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-xl max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Add Client
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Client Type */}
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Client Type
          </label>
          <div className="flex items-center gap-8 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="clientType"
                value="Individual"
                checked={client.clientType === 'Individual'}
                onChange={handleChange}
                className="mr-2 text-blue-500"
              />
              Individual
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="clientType"
                value="Business"
                checked={client.clientType === 'Business'}
                onChange={handleChange}
                className="mr-2 text-blue-500"
              />
              Business
            </label>
          </div>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Full Name / Business Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={client.fullName}
            onChange={handleChange}
            placeholder="Enter full name or business name"
            className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* First Name & Last Name */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={client.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={client.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={client.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Address */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Street Address 1
            </label>
            <input
              type="text"
              name="streetAddress1"
              value={client.streetAddress1}
              onChange={handleChange}
              placeholder="Street Address 1"
              className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Street Address 2
            </label>
            <input
              type="text"
              name="streetAddress2"
              value={client.streetAddress2}
              onChange={handleChange}
              placeholder="Street Address 2"
              className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* City, State, Postal Code */}
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              name="city"
              value={client.city}
              onChange={handleChange}
              placeholder="City"
              className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              name="state"
              value={client.state}
              onChange={handleChange}
              placeholder="State"
              className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              value={client.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Telephone
            </label>
            <input
              type="text"
              name="telephone"
              value={client.telephone}
              onChange={handleChange}
              placeholder="Telephone"
              className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Mobile
            </label>
            <input
              type="text"
              name="mobile"
              value={client.mobile}
              onChange={handleChange}
              placeholder="Mobile"
              className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Category & Invoicing Method */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={client.category}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">
              Invoicing Method
            </label>
            <select
              name="invoicingmethod"
              value={client.invoicingmethod}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="option1">Print (Offline)</option>
              <option value="option2">Send via Email</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-end mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add Client
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addclientform;

