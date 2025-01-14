// import React, { useState } from 'react';
// import { GoPlusCircle } from "react-icons/go";
// import { IoIosArrowBack } from 'react-icons/io';
// import { IoIosArrowForward } from 'react-icons/io';
// import { MdDelete } from "react-icons/md";
// import { FiEdit } from "react-icons/fi";

// // Define a type for the stock data
// type StockItem = {
//   warehouse: string;
//   shop: string;
//   product: string;
//   date: string;
//   person: string;
//   quantity: number;
//   productImage: string;
//   personImage: string;
// };

// const stockData: StockItem[] = [
//   {
//     warehouse: 'Lobar Handy',
//     shop: 'Selosy',
//     product: 'Nike Jordan',
//     date: '25 Jul 2023',
//     person: 'Steven',
//     quantity: 120,
//     productImage: 'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg', // Replace with actual paths
//     personImage: 'https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format', // Replace with actual paths
//   },
//   {
//     warehouse: 'Quaint Warehouse',
//     shop: 'Logerro',
//     product: 'Apple Series 5 Watch',
//     date: '28 Jul 2023',
//     person: 'Gravely',
//     quantity: 130,
//     productImage: 'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
//     personImage: '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
//   },
//   {
//     warehouse: 'Quaint Warehouse',
//     shop: 'Logerro',
//     product: 'Apple Series 5 Watch',
//     date: '28 Jul 2023',
//     person: 'Gravely',
//     quantity: 130,
//     productImage: 'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
//     personImage: '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
//   },
//   {
//     warehouse: 'Quaint Warehouse',
//     shop: 'Logerro',
//     product: 'Apple Series 5 Watch',
//     date: '28 Jul 2023',
//     person: 'Gravely',
//     quantity: 130,
//     productImage: 'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
//     personImage: '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
//   },
//   {
//     warehouse: 'Quaint Warehouse',
//     shop: 'Logerro',
//     product: 'Apple Series 5 Watch',
//     date: '28 Jul 2023',
//     person: 'Gravely',
//     quantity: 130,
//     productImage: 'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
//     personImage: '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
//   },
//   {
//     warehouse: 'Quaint Warehouse',
//     shop: 'Logerro',
//     product: 'Apple Series 5 Watch',
//     date: '28 Jul 2023',
//     person: 'Gravely',
//     quantity: 130,
//     productImage: 'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
//     personImage: '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
//   },
//   {
//     warehouse: 'Quaint Warehouse',
//     shop: 'Logerro',
//     product: 'Apple Series 5 Watch',
//     date: '28 Jul 2023',
//     person: 'Gravely',
//     quantity: 130,
//     productImage: 'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
//     personImage: '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
//   },
//   {
//     warehouse: 'Quaint Warehouse',
//     shop: 'Logerro',
//     product: 'Apple Series 5 Watch',
//     date: '28 Jul 2023',
//     person: 'Gravely',
//     quantity: 130,
//     productImage: 'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
//     personImage: '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
//   },
//   {
//     warehouse: 'Quaint Warehouse',
//     shop: 'Logerro',
//     product: 'Apple Series 5 Watch',
//     date: '28 Jul 2023',
//     person: 'Gravely',
//     quantity: 130,
//     productImage: 'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
//     personImage: '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
//   },
//   {
//     warehouse: 'Quaint Warehouse',
//     shop: 'Logerro',
//     product: 'Apple Series 5 Watch',
//     date: '28 Jul 2023',
//     person: 'Gravely',
//     quantity: 130,
//     productImage: 'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
//     personImage: '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
//   },
//   {
//     warehouse: 'Quaint Warehouse',
//     shop: 'Logerro',
//     product: 'Apple Series 5 Watch',
//     date: '28 Jul 2023',
//     person: 'Gravely',
//     quantity: 130,
//     productImage: 'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
//     personImage: '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
//   },
//   {
//     warehouse: 'Quaint Warehouse',
//     shop: 'Logerro',
//     product: 'Apple Series 5 Watch',
//     date: '28 Jul 2023',
//     person: 'Gravely',
//     quantity: 130,
//     productImage: 'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
//     personImage: '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
//   },
// ];

// const ManageStock: React.FC = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5; // Number of items per page

//   const handleOpenPopup = () => setIsPopupOpen(true);
//   const handleClosePopup = () => setIsPopupOpen(false);

//   // Calculate pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = stockData.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(stockData.length / itemsPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div className="p-6">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Manage Stock</h1>
//         <button
//           className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700"
//           onClick={handleOpenPopup}
//         >
//          <span className='flex justify-center items-center gap-2'><GoPlusCircle />Add New</span>
//         </button>
//       </div>

//       {/* Search and Filter Section */}
//       <div className="p-6 bg-white shadow-md rounded-lg mt-6 h-[100vh] flex flex-col">
//         <div className="flex justify-between items-center mb-4">
//           <div className="w-1/3">
//             <input
//               type="text"
//               placeholder="Search by Warehouse, Shop or Product"
//               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//           </div>

//           <div className="flex items-center space-x-2">
//             <select className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500">
//               <option value="">Filter by Warehouse</option>
//               <option value="Lobar Handy">Lobar Handy</option>
//               <option value="Quaint Warehouse">Quaint Warehouse</option>
//             </select>

//             <select className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500">
//               <option value="">Filter by Shop</option>
//               <option value="Selosy">Selosy</option>
//               <option value="Logerro">Logerro</option>
//             </select>

//             <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700">
//               Apply
//             </button>
//           </div>
//         </div>

//         {/* Table Section */}
//         <div className="flex items-center justify-between mb-4 mt-3">
//           <table className="w-full table-auto border-collapse">
//             <thead>
//               <tr className="bg-gray-50">
//                 <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
//                   Warehouse
//                 </th>
//                 <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
//                   Shop
//                 </th>
//                 <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
//                   Product
//                 </th>
//                 <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
//                   Date
//                 </th>
//                 <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
//                   Person
//                 </th>
//                 <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
//                   Quantity
//                 </th>
//                 <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentItems.map((item, index) => (
//                 <tr key={index} className="hover:bg-gray-100">
//                   <td className="p-3 text-sm text-gray-800 border-b">
//                     {item.warehouse}
//                   </td>
//                   <td className="p-3 text-sm text-gray-800 border-b">
//                     {item.shop}
//                   </td>
//                   <td className="p-3 text-sm text-gray-800 border-b flex items-center">
//                     <img
//                       src={item.productImage}
//                       alt={item.product}
//                       className="w-8 h-8 rounded-full mr-3"
//                     />
//                     {item.product}
//                   </td>
//                   <td className="p-3 text-sm text-gray-800 border-b">
//                     {item.date}
//                   </td>
//                   <td className="p-3 text-sm text-gray-800 border-b flex items-center">
//                     <img
//                       src={item.personImage}
//                       alt={item.person}
//                       className="w-8 h-8 rounded-full mr-3"
//                     />
//                     {item.person}
//                   </td>
//                   <td className="p-3 text-sm text-gray-800 border-b">
//                     {item.quantity}
//                   </td>
//                   <td className="p-3 text-sm text-gray-800 border-b flex gap-2">
//                     <button className="text-blue-500 hover:underline">
//                     <FiEdit />
//                     </button>
//                     <button className="text-red-500 hover:underline">
//                     <MdDelete />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination Section */}
//         <div className="flex justify-end mt-4 items-end h-[30rem]">
//           <button
//             className={`px-4 py-4 border rounded-full ${
//               currentPage === 1
//                 ? 'bg-gray-300 cursor-not-allowed'
//                 : 'bg-blue-600 text-white hover:bg-blue-700'
//             }`}
//             onClick={handlePrevPage}
//             disabled={currentPage === 1}
//           >
//             <IoIosArrowBack />
//           </button>
//           <span className="px-4 py-3">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             className={`px-4 py-4 border rounded-full ${
//               currentPage === totalPages
//                 ? 'bg-gray-300 cursor-not-allowed'
//                 : 'bg-blue-600 text-white hover:bg-blue-700'
//             }`}
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages}
//           >
//              <IoIosArrowForward />
//           </button>
//         </div>

//         {/* Popup Form */}
//         {isPopupOpen && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
//               <h2 className="text-xl font-bold mb-4">Add New Stock</h2>
//               <form>
//                 <div className="mb-4">
//                   <label className="block text-sm font-semibold mb-1">
//                     Warehouse
//                   </label>
//                   <select className="w-full px-3 py-2 border rounded focus:outline-none">
//                     <option value="">Select Warehouse</option>
//                     <option value="Lobar Handy">Lobar Handy</option>
//                     <option value="Quaint Warehouse">Quaint Warehouse</option>
//                   </select>
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-semibold mb-1">
//                     Shop
//                   </label>
//                   <select className="w-full px-3 py-2 border rounded focus:outline-none">
//                     <option value="">Select Shop</option>
//                     <option value="Selosy">Selosy</option>
//                     <option value="Logerro">Logerro</option>
//                   </select>
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-semibold mb-1">
//                     Responsible Person
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter Person's Name"
//                     className="w-full px-3 py-2 border rounded focus:outline-none"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-semibold mb-1">
//                     Product
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Search for Product"
//                     className="w-full px-3 py-2 border rounded focus:outline-none"
//                   />
//                 </div>
//                 <div className="flex justify-end gap-4">
//                   <button
//                     type="button"
//                     className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                     onClick={handleClosePopup}
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700"
//                   >
//                     Create
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ManageStock;

import { useState } from 'react';
import StockForm from './StockForm';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import LogoImage from "../../images/logo/Kick.png";

// // Define a type for the stock data
type StockItem = {
  warehouse: string;
  shop: string;
  product: string;
  date: string;
  person: string;
  quantity: number;
  productImage: string;
  personImage: string;
};

const stockData: StockItem[] = [
  {
    warehouse: 'Lobar Handy',
    shop: 'Selosy',
    product: 'Nike Jordan',
    date: '25 Jul 2023',
    person: 'Steven',
    quantity: 120,
    productImage:
      'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg', // Replace with actual paths
    personImage:
      'https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format', // Replace with actual paths
  },
  {
    warehouse: 'Quaint Warehouse',
    shop: 'Logerro',
    product: 'Apple Series 5 Watch',
    date: '28 Jul 2023',
    person: 'Gravely',
    quantity: 130,
    productImage:
      'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
    personImage:
      '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
  },
  {
    warehouse: 'Quaint Warehouse',
    shop: 'Logerro',
    product: 'Apple Series 5 Watch',
    date: '28 Jul 2023',
    person: 'Gravely',
    quantity: 130,
    productImage:
      'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
    personImage:
      '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
  },
  {
    warehouse: 'Quaint Warehouse',
    shop: 'Logerro',
    product: 'Apple Series 5 Watch',
    date: '28 Jul 2023',
    person: 'Gravely',
    quantity: 130,
    productImage:
      'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
    personImage:
      '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
  },
  {
    warehouse: 'Quaint Warehouse',
    shop: 'Logerro',
    product: 'Apple Series 5 Watch',
    date: '28 Jul 2023',
    person: 'Gravely',
    quantity: 130,
    productImage:
      'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
    personImage:
      '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
  },
  {
    warehouse: 'Quaint Warehouse',
    shop: 'Logerro',
    product: 'Apple Series 5 Watch',
    date: '28 Jul 2023',
    person: 'Gravely',
    quantity: 130,
    productImage:
      'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
    personImage:
      '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
  },
  {
    warehouse: 'Quaint Warehouse',
    shop: 'Logerro',
    product: 'Apple Series 5 Watch',
    date: '28 Jul 2023',
    person: 'Gravely',
    quantity: 130,
    productImage:
      'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
    personImage:
      '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
  },
  {
    warehouse: 'Quaint Warehouse',
    shop: 'Logerro',
    product: 'Apple Series 5 Watch',
    date: '28 Jul 2023',
    person: 'Gravely',
    quantity: 130,
    productImage:
      'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
    personImage:
      '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
  },
  {
    warehouse: 'Quaint Warehouse',
    shop: 'Logerro',
    product: 'Apple Series 5 Watch',
    date: '28 Jul 2023',
    person: 'Gravely',
    quantity: 130,
    productImage:
      'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
    personImage:
      '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
  },
  {
    warehouse: 'Quaint Warehouse',
    shop: 'Logerro',
    product: 'Apple Series 5 Watch',
    date: '28 Jul 2023',
    person: 'Gravely',
    quantity: 130,
    productImage:
      'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
    personImage:
      '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
  },
  {
    warehouse: 'Quaint Warehouse',
    shop: 'Logerro',
    product: 'Apple Series 5 Watch',
    date: '28 Jul 2023',
    person: 'Gravely',
    quantity: 130,
    productImage:
      'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
    personImage:
      '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
  },
  {
    warehouse: 'Quaint Warehouse',
    shop: 'Logerro',
    product: 'Apple Series 5 Watch',
    date: '28 Jul 2023',
    person: 'Gravely',
    quantity: 130,
    productImage:
      'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
    personImage:
      '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
  },
];

const ManageStock = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State to store search query
  const [folderQuery, setFolderQuery] = useState(''); // State for folder search query
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  //   // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredStockData = stockData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(stockData.length / itemsPerPage);


  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Form fields
  const fields = [
    {
      name: 'Warehouse',
      label: 'Warehouse',
      type: 'text',
      placeholder: 'select',
    },
    {
      name: 'Shop',
      label: 'Shop',
      type: 'text',
      placeholder: 'select',
    },
    {
      name: 'Responsible Person',
      label: 'Responsible Person',
      type: 'text',
      placeholder: 'select',
    },
    {
      name: 'Product',
      label: 'Product',
      type: 'text',
      placeholder: 'Search Product',
    },
  ];

  // Handle form submission
  const handleSubmit = (data: Record<string, any>) => {
    console.log('Manage Stock Submitted Data:', data);
    // API call or logic for adding stock
    setShowModal(false); // Close the modal after submission
  };


  return (
    <div className="p-4 min-h-screen">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
        <h1 className="text-2xl font-bold">Manage Stock</h1>
        <p>Manage your stock</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          Add New
        </button>
      </div>

      <div className="bg-white h-screen rounded p-9">
        {/* Search Bar and Folder Input Field */}
        <div className="flex justify-between mb-4">
          {/* Search Bar */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for items..."
            className="p-2 w-1/4 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          />

          {/* Folder Input Field */}
          <input
            type="text"
            value={folderQuery}
            onChange={(e) => setFolderQuery(e.target.value)}
            placeholder="Search folder..."
            className="p-2 w-1/4 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          />
        </div>

        {/* Table Section */}
        <div className="flex items-center justify-between mb-4 mt-3 bg-white">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Warehouse
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Shop
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Product
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Date
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Person
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Quantity
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStockData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-3 text-sm text-gray-800 border-b">
                    {item.warehouse}
                  </td>
                  <td className="p-3 text-sm text-gray-800 border-b">
                    {item.shop}
                  </td>
                  <td className="p-3 text-sm text-gray-800 border-b flex items-center">
                    <img
                      src={item.productImage}
                      alt={item.product}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    {item.product}
                  </td>
                  <td className="p-3 text-sm text-gray-800 border-b">
                    {item.date}
                  </td>
                  <td className="p-3 text-sm text-gray-800 border-b flex items-center">
                    <img
                      src={item.personImage}
                      alt={item.person}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    {item.person}
                  </td>
                  <td className="p-3 text-sm text-gray-800 border-b">
                    {item.quantity}
                  </td>
                  <td className="p-3 text-sm text-gray-800 border-b flex gap-2">
                    <button className="text-blue-500 hover:underline">
                      <FiEdit />
                    </button>
                    <button className="text-red-500 hover:underline">
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="flex justify-end items-end h-[17rem]">
          <button
            className={`px-4 py-4 border rounded-full ${
              currentPage === 1
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <IoIosArrowBack />
          </button>
          <span className="px-4 py-3">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`px-4 py-4 border rounded-full ${
              currentPage === totalPages
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <IoIosArrowForward />
          </button>
        </div>
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="rounded-lg mt-17">
              <StockForm
                title="Add Stock"
                logo={LogoImage}
                fields={fields}
                onSubmit={handleSubmit}
                buttons={{ save: 'Save Stock', cancel: 'Cancel' }}
              />
              <button
                onClick={() => setShowModal(false)}
                
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageStock;
