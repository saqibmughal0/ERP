// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { MdDelete } from "react-icons/md";
// import { FaEdit } from "react-icons/fa";

// function InvoiceTable() {
//   const [invoices, setInvoices] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
//     setInvoices(savedInvoices);
//   }, []);


//   const deleteInvoice = (index) => {
//     const updatedInvoices = invoices.filter((_, i) => i !== index);
    
//     setInvoices(updatedInvoices);
//     localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
//   };

//   return (
//     <div className="p-6 bg-white shadow-md rounded-lg">
//       <div className="flex items-center justify-end mb-4">
//         <div className="flex items-center gap-4">
//           <button
//             className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700"
//             onClick={() => navigate('/InvoiceForm')}
//           >
//             + Create Invoice
//           </button>
//         </div>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-50 text-gray-600 text-sm font-semibold">
//               <th className="p-3 text-left">#</th>
//               <th className="p-3 text-left">Invoice Number</th>
//               <th className="p-3 text-left">Date Issued</th>
//               <th className="p-3 text-left">Due Date</th>
//               <th className="p-3 text-left">Client</th>
//               <th className="p-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {invoices.length > 0 ? (
//               invoices.map((invoice, index) => (
//                 <tr key={index} className="text-sm text-gray-500">
//                   <td className="p-3">{index + 1}</td>
//                   <td className="p-3">{invoice.invoiceNumber}</td>
//                   <td className="p-3">{invoice.dateIssued}</td>
//                   <td className="p-3">{invoice.dueDate}</td>
//                   <td className="p-3">{invoice.invoiceTo}</td>
//                   <td className="p-3 flex gap-2">
//                     <button className="text-blue-600 hover:underline">
//                     <FaEdit />
//                     </button>
//                     <button
//                       className="text-red-600 hover:underline"
//                       onClick={() => deleteInvoice(index)}
//                     >
//                       <MdDelete />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr className="text-sm text-gray-500 text-center">
//                 <td colSpan={6} className="py-4">
//                   No data available in table
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default InvoiceTable;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

// Define the type for an invoice
interface Invoice {
  invoiceNumber: string;
  dateIssued: string;
  dueDate: string;
  invoiceTo: string;
  qty: string;
}

function InvoiceTable() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const navigate = useNavigate();

  // Fetch invoices from localStorage on component mount
  useEffect(() => {
    const savedInvoices = JSON.parse(localStorage.getItem('invoices') || '[]') as Invoice[];
    setInvoices(savedInvoices);
  }, []);

  // Delete an invoice
  const deleteInvoice = (index: number) => {
    const updatedInvoices = invoices.filter((_, i) => i !== index);

    setInvoices(updatedInvoices);
    localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-end mb-4">
        <div className="flex items-center gap-4">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700"
            onClick={() => navigate('/InvoiceForm')}
          >
            + Create Invoice
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm font-semibold">
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Invoice Number</th>
              <th className="p-3 text-left">Date Issued</th>
              <th className="p-3 text-left">Due Date</th>
              <th className="p-3 text-left">Client</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.length > 0 ? (
              invoices.map((invoice, index) => (
                <tr key={index} className="text-sm text-gray-500">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{invoice.invoiceNumber}</td>
                  <td className="p-3">{invoice.dateIssued}</td>
                  <td className="p-3">{invoice.dueDate}</td>
                  <td className="p-3">{invoice.invoiceTo}</td>
                  <td className="p-3 flex gap-2">
                    <button className="text-blue-600 hover:underline">
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => deleteInvoice(index)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="text-sm text-gray-500 text-center">
                <td colSpan={6} className="py-4">
                  No data available in table
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InvoiceTable;
