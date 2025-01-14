import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
// import { FaEdit } from 'react-icons/fa';
import { AiFillFilePdf } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import axios from 'axios';
import InvoiceCards from './InvoiceCards';
// import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';

interface Invoice {
  _id: string;
  invoiceNumber: string;
  dateIssued: string;
  dueDate: string;
  invoiceTo: string;
  qty: string;
  isPaid: boolean;
}

function InvoiceTable() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [filteredInvoices, setFilteredInvoices] = useState<Invoice[]>([]);
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]); // Track selected invoices
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('All Clients');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/saveInvoice',
        );
        setInvoices(response.data);
        setFilteredInvoices(response.data);
      } catch (error) {
        console.log('Error fetching invoices:', error);
      }
    };

    fetchInvoices();
  }, []);

  // Pagination logic
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentInvoices = filteredInvoices.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);

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
        setFilteredInvoices(invoices.filter((invoice) => invoice.isPaid));
        break;
      case 'Pending Invoices':
        setFilteredInvoices(invoices.filter((invoice) => !invoice.isPaid));
        break;
      case 'Due Date Passed Invoices':
        setFilteredInvoices(
          invoices.filter((invoice) => new Date(invoice.dueDate) < new Date()),
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
          axios.delete(`http://localhost:5000/api/saveInvoice/${id}`),
        ),
      );
      // Update the invoice list after deletion
      setInvoices(
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

  // Download as PDF
  const downloadPDF = (invoice: Invoice) => {
    const doc = new jsPDF();
    doc.text(`Invoice Number: ${invoice.invoiceNumber}`, 10, 10);
    doc.text(`Date Issued: ${invoice.dateIssued}`, 10, 20);
    doc.text(`Due Date: ${invoice.dueDate}`, 10, 30);
    doc.text(`Client: ${invoice.invoiceTo}`, 10, 40);
    doc.text(`Quantity: ${invoice.qty}`, 10, 50);
    doc.text(`Status: ${invoice.isPaid ? 'Paid' : 'Pending'}`, 10, 60);
    doc.save(`Invoice_${invoice.invoiceNumber}.pdf`);
  };

  // Download as Excel
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(invoices);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Invoices');
    XLSX.writeFile(workbook, 'Invoices.xlsx');
  };

  return (
    <>
      <InvoiceCards invoices={invoices} />
      <div className="p-6 bg-white shadow-md rounded-lg mt-6 h-[100vh] flex flex-col">
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
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700"
              onClick={() => navigate('/InvoiceForm')}
            >
              + Create Invoice
            </button>
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
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Invoice Number</th>
                <th className="p-3 text-left">Date Issued</th>
                <th className="p-3 text-left">Due Date</th>
                <th className="p-3 text-left">Client</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
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
                    <td className="p-3">{firstIndex + index + 1}</td>
                    <td className="p-3">{invoice.invoiceNumber}</td>
                    <td className="p-3">{invoice.dateIssued}</td>
                    <td className="p-3">{invoice.dueDate}</td>
                    <td className="p-3">{invoice.invoiceTo}</td>
                    <td className="p-3">
                      {invoice.isPaid ? (
                        <span className="text-green-600">Paid</span>
                      ) : (
                        <span className="text-red-600">Pending</span>
                      )}
                    </td>
                    <td className="p-3 flex gap-2">
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

        {/* Pagination */}
        <div className="flex items-center mt-4 justify-end">
          <div className="flex items-center gap-2">
            <button
              className="bg-gray-200 px-4 py-4 rounded-full shadow-md hover:bg-gray-300"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              <IoIosArrowBack />
            </button>
            <span className="px-4">{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              className="bg-gray-200 px-4 py-4 rounded-full shadow-md hover:bg-gray-300"
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoiceTable;
