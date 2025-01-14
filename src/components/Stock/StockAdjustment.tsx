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
  notes: string;
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
    notes: "Hi",
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
    notes: "Hi",
    productImage:
      'https://www.bestshoe99.in/wp-content/uploads/2019/11/shoes-polish-min.jpg',
    personImage:
      '/https://motionarray.imgix.net/preview-377228-hrmlh0MEGwM6WYGh-large.jpg?w=3840&q=60&fit=max&auto=format',
  },
  

];

const StockAdjustment = () => {
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
      name: 'Product',
      label: 'Products',
      type: 'text',
      placeholder: 'Product',
    },
    {
      name: 'Warehouse',
      label: 'Warehouse',
      type: 'text',
      placeholder: 'Warehouse',
    },
    {
      name: 'Reference Number',
      label: 'Reference Number',
      type: 'text',
      placeholder: 'Reference Number',
    },
    {
      name: 'Responsible Person',
      label: 'Responsible Person',
      type: 'text',
      placeholder: 'Responsible Person',
    },
    {
      name: 'Notes',
      label: 'Notes',
      type: 'text',
      placeholder: 'Notes',
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
        <h1 className="text-2xl font-bold">Stock Adjustment</h1>
        <p>Manage your stock adjustment</p>
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
                  Notes
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
                    {item.notes}
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
                title="Add Adjustment"
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

export default StockAdjustment;
