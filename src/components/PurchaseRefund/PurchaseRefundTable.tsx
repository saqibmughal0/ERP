// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FiEdit, FiTrash } from 'react-icons/fi'; // Import Edit and Trash icons

// interface Invoice {
//   supplier: string;
//   puNumber: string;
//   date: string; // Existing Date field
//   orderDate: string; // New Order Date field
//   dueDate: string; // New Due Date field
//   paymentTerms: string;
//   account: string;
//   items: {
//     item: string;
//     description: string;
//     unitPrice: string;
//     quantity: string;
//     discount: string;
//     tax: string;
//     subtotal: number;
//   }[];
// }

// export default function PurchaseRefundTable() {
//   const navigate = useNavigate();
//   const [refundinvoices, setRefundInvoices] = useState<Invoice[]>([]);
//   const [editIndex, setEditIndex] = useState<number | null>(null);
//   const [editedInvoice, setEditedInvoice] = useState<Invoice | null>(null);

//   useEffect(() => {
//     const storedData = localStorage.getItem('purchaseRefund');
//     if (storedData) {
//       setRefundInvoices(JSON.parse(storedData) as Invoice[]);
//     }
//   }, []);

//   // Delete invoice handler
//   const deleteRefunfInvoice = (index: number) => {
//     const updatedpurchaseRefund = refundinvoices.filter((_, i) => i !== index);
//     setRefundInvoices(updatedpurchaseRefund);
//     localStorage.setItem('purchaseRefund', JSON.stringify(updatedpurchaseRefund));
//   };

//   // Edit invoice handler
//   const editInvoice = (index: number) => {
//     setEditIndex(index);
//     setEditedInvoice(refundinvoices[index]);
//   };

//   // Save the edited invoice
//   const saveEditedInvoice = () => {
//     if (editedInvoice !== null && editIndex !== null) {
//       const updatedpurchaseRefund = [...refundinvoices];
//       updatedpurchaseRefund[editIndex] = editedInvoice;
//       setRefundInvoices(updatedpurchaseRefund);
//       localStorage.setItem('purchaseInvoices', JSON.stringify(updatedpurchaseRefund));
//       setEditIndex(null);
//       setEditedInvoice(null);
//     }
//   };

//   return (
//     <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-semibold text-gray-800">
//           Purchase Refund Invoice
//         </h1>
//         <div className="flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Search invoices..."
//             className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-72"
//           />
//           <button
//             onClick={() => navigate('/PurchaseRefundForm')}
//             className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700"
//           >
//             + Add Purchase Refund
//           </button>
//         </div>
//       </div>

//       {/* Table to display invoices */}
//       <div className="overflow-x-auto shadow-lg rounded-lg">
//         <table className="w-full bg-white border border-gray-200 rounded-md shadow-md">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 border-b">
//                 Supplier
//               </th>
//               <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 border-b">
//                 PI Number
//               </th>
//               <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 border-b">
//                 Order Date
//               </th>{' '}
//               {/* New column */}
//               <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 border-b">
//                 Due Date
//               </th>{' '}
//               {/* New column */}
//               <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 border-b">
//                 Payment Terms
//               </th>
//               <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 border-b">
//                 Account
//               </th>
//               <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 border-b">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {refundinvoices.length > 0 ? (
//               refundinvoices.map((refundinvoices, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 text-sm text-gray-700 border-b">
//                     {refundinvoices.supplier}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-700 border-b">
//                     {refundinvoices.puNumber}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-700 border-b">
//                     {refundinvoices.orderDate}
//                   </td>{' '}
//                   {/* Display Order Date */}
//                   <td className="px-6 py-4 text-sm text-gray-700 border-b">
//                     {refundinvoices.dueDate}
//                   </td>{' '}
//                   {/* Display Due Date */}
//                   <td className="px-6 py-4 text-sm text-gray-700 border-b">
//                     {refundinvoices.paymentTerms}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-700 border-b">
//                     {refundinvoices.account}
//                   </td>
//                   <td className="px-6 py-6 text-sm text-gray-700 border-b flex space-x-4">
//                     <button
//                       onClick={() => editInvoice(index)}
//                       className="text-blue-600 hover:underline flex items-center"
//                     >
//                       <FiEdit className="mr-2" />
//                     </button>
//                     <button
//                       onClick={() => deleteRefunfInvoice(index)}
//                       className="text-red-600 hover:underline flex items-center"
//                     >
//                       <FiTrash className="mr-2" />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={8} className="px-6 py-4 text-center text-gray-500">
//                   No invoices found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {editIndex !== null && editedInvoice !== null && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg p-6 w-1/3">
//             <h2 className="text-lg font-bold mb-4">Edit Invoice</h2>

//             {/* Supplier Field */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Supplier
//               </label>
//               <input
//                 type="text"
//                 value={editedInvoice.supplier}
//                 onChange={(e) =>
//                   setEditedInvoice({
//                     ...editedInvoice,
//                     supplier: e.target.value,
//                   })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//               />
//             </div>

//             {/* PI Number Field */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 PI Number
//               </label>
//               <input
//                 type="text"
//                 value={editedInvoice.puNumber}
//                 onChange={(e) =>
//                   setEditedInvoice({
//                     ...editedInvoice,
//                     puNumber: e.target.value,
//                   })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//               />
//             </div>

//             {/* Date Field */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Date
//               </label>
//               <input
//                 type="date"
//                 value={editedInvoice.date}
//                 onChange={(e) =>
//                   setEditedInvoice({ ...editedInvoice, date: e.target.value })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//               />
//             </div>

//             {/* Payment Terms Field */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Payment Terms
//               </label>
//               <input
//                 type="text"
//                 value={editedInvoice.paymentTerms}
//                 onChange={(e) =>
//                   setEditedInvoice({
//                     ...editedInvoice,
//                     paymentTerms: e.target.value,
//                   })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//               />
//             </div>

//             {/* Account Field */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Account
//               </label>
//               <input
//                 type="text"
//                 value={editedInvoice.account}
//                 onChange={(e) =>
//                   setEditedInvoice({
//                     ...editedInvoice,
//                     account: e.target.value,
//                   })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//               />
//             </div>

//             {/* Save and Cancel Buttons */}
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={() => {
//                   setEditIndex(null);
//                   setEditedInvoice(null);
//                 }}
//                 className="bg-gray-400 text-white px-4 py-2 rounded-md"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={saveEditedInvoice}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-md"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { AiFillFilePdf } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import axios from 'axios';

interface Invoice {
  _id: string;
  invoiceTo: any;
  supplier: string;
  puNumber: string;
  date: string; // Existing Date field
  orderDate: string; // New Order Date field
  dueDate: string; // New Due Date field
  paymentTerms: string;
  account: string;
  items: {
    item: string;
    description: string;
    unitPrice: string;
    quantity: string;
    discount: string;
    tax: string;
    subtotal: number;
  }[];
}

function PurchaseRefundTable() {
  const [invoices, setPurchaseInvoices] = useState<Invoice[]>([]);
  const [filteredInvoices, setFilteredInvoices] = useState<Invoice[]>([]);
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]); // Track selected invoices
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('All Clients');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPurchaseInvoices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/refund');
        setPurchaseInvoices(response.data);
        setFilteredInvoices(response.data);
      } catch (error) {
        console.log('Error fetching invoices:', error);
      }
    };

    fetchPurchaseInvoices();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInvoices = invoices.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(invoices.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      setFilteredInvoices(
        invoices.filter((invoice) =>
          invoice.invoiceTo.toLowerCase().includes(query),
        ),
      );
    } else {
      setFilteredInvoices(invoices);
    }
  };

  // Handle filter dropdown
  const handleFilterChange = (option: string) => {
    setFilterOption(option);

    switch (option) {
      case 'Downloaded Invoices':
        setFilteredInvoices(invoices.filter((invoice) => invoice.supplier));
        break;
      case 'Pending Invoices':
        setFilteredInvoices(invoices.filter((invoice) => !invoice.puNumber));
        break;
      case 'Due Date Passed Invoices':
        setFilteredInvoices(
          invoices.filter(
            (invoice) => new Date(invoice.date) < new Date(),
          ),
        );
        break;
      default:
        setFilteredInvoices(invoices);
    }
  };

  // Delete selected invoices
  const deleteInvoices = async () => {
    try {
      await Promise.all(
        selectedInvoices.map((id) =>
          axios.delete(`http://localhost:5000/api/refund${id}`),
        ),
      );
      // Update the invoice list after deletion
      setPurchaseInvoices(
        invoices.filter((invoice) => !selectedInvoices.includes(invoice._id)),
      );
      setFilteredInvoices(
        filteredInvoices.filter(
          (invoice) => !selectedInvoices.includes(invoice._id),
        ),
      );
      setSelectedInvoices([]); // Clear selected invoices after deletion
      console.log('Selected invoices deleted successfully');
    } catch (error) {
      console.error('Error deleting invoices:', error);
    }
  };

  // Handle individual checkbox selection
  const handleCheckboxChange = (id: string) => {
    setSelectedInvoices((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((invoiceId) => invoiceId !== id)
        : [...prevSelected, id],
    );
  };

  // Handle "Select All" checkbox
  const handleSelectAll = () => {
    if (selectedInvoices.length === filteredInvoices.length) {
      setSelectedInvoices([]); // Deselect all if already all selected
    } else {
      setSelectedInvoices(filteredInvoices.map((invoice) => invoice._id)); // Select all
    }
  };

  function downloadPDF(_invoice: Invoice): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Refund List</h1>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700"
          onClick={() => navigate('/PurchaseRefundForm')}
        >
          + Add Refund
        </button>
      </div>
      <div className="p-3 bg-white shadow-md rounded-lg mt-6 h-[100vh] flex flex-col">
        {/* Search & Create */}
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Search by client name..."
            value={searchQuery}
            onChange={handleSearch}
            className="border px-4 py-2 rounded-md shadow-md"
          />

          <div className="relative space-x-5">
            <select
              className="top-full mt-2 px-3 py-2 border outline-none rounded-md shadow-md bg-white"
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <option>All Clients</option>
              <option>Downloaded Invoices</option>
              <option>Pending Invoices</option>
              <option>Due Date Passed Invoices</option>
            </select>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-y-auto grow">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-sm font-semibold w-full">
                <th className="p-3 text-left">
                  <input
                    type="checkbox"
                    checked={
                      selectedInvoices.length === filteredInvoices.length
                    }
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 border-b">
                  Supplier
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 border-b">
                  PU Number
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 border-b">
                  Order Date
                </th>{' '}
                {/* New column */}
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 border-b">
                  Due Date
                </th>{' '}
                {/* New column */}
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 border-b">
                  Payment Terms
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 border-b">
                  Account
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 border-b">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentInvoices.length > 0 ? (
                currentInvoices.map((invoice, index) => (
                  <tr
                    key={invoice._id}
                    className="text-sm text-gray-500 border-b-2"
                  >
                    <td className="p-3">
                      <input
                        type="checkbox"
                        checked={selectedInvoices.includes(invoice._id)}
                        onChange={() => handleCheckboxChange(invoice._id)}
                      />
                    </td>
                    <td className="p-3">{currentPage + index + 1}</td>
                    <td className="p-3">{invoice.supplier}</td>
                    <td className="p-3">{invoice.puNumber}</td>
                    <td className="p-3">{invoice.orderDate}</td>
                    <td className="p-3">{invoice.dueDate}</td>
                    <td className="p-3">{invoice.paymentTerms}</td>
                    <td className="p-3">{invoice.account}</td>
                    <td className="p-3 flex gap-2 justify-center items-center">
                      <button
                        onClick={() => downloadPDF(invoice)}
                        className="text-blue-600 hover:underline"
                      >
                        <AiFillFilePdf />
                      </button>
                      <button
                        onClick={() => deleteInvoices()}
                        className={`${
                          selectedInvoices.length > 0
                            ? 'text-red-600 hover:underline'
                            : 'text-gray-300 cursor-not-allowed'
                        }`}
                        disabled={selectedInvoices.length === 0}
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="py-4 text-center">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination Section */}
      <div className="flex justify-end items-end mt-4">
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
    </>
  );
}

export default PurchaseRefundTable;
