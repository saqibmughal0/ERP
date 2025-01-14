import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { AiFillFilePdf } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import axios from 'axios';

interface Invoice {
  invoiceTo: any;
  _id: string;
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
  ntnNumber: string;
  idCardNumber: string;
  whatsApp: string;
  website: string;
  supplierID: string;
  openingBalance: string;
  openingBalanceDate: string;
}

function ManageSupplier() {
  const [invoices, setPurchaseInvoices] = useState<Invoice[]>([]);
  const [filteredInvoices, setFilteredInvoices] = useState<Invoice[]>([]);
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]); // Track selected invoices
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('All Clients');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPurchaseInvoices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/supplier');
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
        setFilteredInvoices(invoices.filter((invoice) => invoice.fullName));
        break;
      case 'Pending Invoices':
        setFilteredInvoices(invoices.filter((invoice) => !invoice.firstName));
        break;
      case 'Due Date Passed Invoices':
        setFilteredInvoices(
          invoices.filter(
            (invoice) => new Date(invoice.codeNumber) < new Date(),
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
          axios.delete(`http://localhost:5000/api/supplier${id}`),
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
        <h1 className="text-2xl font-bold">Supplier List</h1>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700"
          onClick={() => navigate('/ManageSupplierForm')}
        >
          + Add Suppliers
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
              <tr className="bg-gray-50 text-gray-600 text-sm font-semibold">
                <th className="p-3 text-left">
                  <input
                    type="checkbox"
                    checked={
                      selectedInvoices.length === filteredInvoices.length
                    }
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  #
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Full Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Mobile
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  City
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  NTN Number
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Id Card Number
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Supplier ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
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
                    <td className="p-3">{invoice.fullName}</td>
                    <td className="p-3">{invoice.email}</td>
                    <td className="p-3">{invoice.mobile}</td>
                    <td className="p-3">{invoice.streetAddress1}</td>
                    <td className="p-3">{invoice.city}</td>
                    <td className="p-3">{invoice.ntnNumber}</td>
                    <td className="p-3">{invoice.idCardNumber}</td>
                    <td className="p-3">{invoice.supplierID}</td>
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
            currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
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
            currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
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

export default ManageSupplier;
