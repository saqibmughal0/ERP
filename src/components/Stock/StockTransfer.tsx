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
  NoOfProducts: number;
  QuantityTransferred: number;
  RefNumber: string;
  date: string;
};

const stockData: StockItem[] = [
  {
    warehouse: 'Lobar Handy',
    shop: 'Selosy',
    NoOfProducts: 1,
    QuantityTransferred: 1,
    RefNumber: '#111', 
    date: '25 Jul 2023',
  },
  {
    warehouse: 'Quaint Warehouse',
    shop: 'Logerro',
    NoOfProducts: 2,
    QuantityTransferred: 2,
    RefNumber: '#122',
    date: '26 Jul 2023',
  },
  

];

const StockTransfer = () => {
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
      name: 'Warehouse From',
      label: 'Warehouse From',
      type: 'text',
      placeholder: 'Select',
    },
    {
      name: 'Warehouse To',
      label: 'Warehouse To',
      type: 'text',
      placeholder: 'Select',
    },
    {
      name: 'Responsible Person',
      label: 'Responsible Person',
      type: 'text',
      placeholder: 'Responsible Person',
    },
    {
      name: 'Product',
      label: 'Product',
      type: 'text',
      placeholder: 'Product',
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
        <h1 className="text-2xl font-bold">Stock Transfer</h1>
        <p>Manage your stock transfer</p>
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
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
                  From Warehouse
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
                To Warehouse
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
                  No Of Products
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
                Quantity Transferred
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
                Ref Number
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Date
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
                    {item.NoOfProducts}
                  </td>
                  <td className="p-3 text-sm text-gray-800 border-b">
                    {item.QuantityTransferred}
                  </td>
                  <td className="p-3 text-sm text-gray-800 border-b">
                    {item.RefNumber}
                  </td>
                  <td className="p-3 text-sm text-gray-800 border-b">
                    {item.date}
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
          <div className="fixed inset-0 bg-black bg-opacity-50 shadow-lg flex justify-center items-center z-99">
            <div className="rounded-lg mt-17">
              <StockForm
                title="Add Transfer"
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

export default StockTransfer;
