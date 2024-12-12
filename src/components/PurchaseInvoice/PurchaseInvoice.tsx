import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiEdit, FiTrash } from 'react-icons/fi'; // Import Edit and Trash icons

interface Invoice {
  supplier: string;
  piNumber: string;
  date: string;
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

export default function PurchaseInvoice() {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editedInvoice, setEditedInvoice] = useState<Invoice | null>(null);

  // Fetch invoices from localStorage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem('purchaseInvoices');
    if (storedData) {
      setInvoices(JSON.parse(storedData) as Invoice[]);
    }
  }, []);

  // Delete invoice handler
  const deleteInvoice = (index: number) => {
    const updatedInvoices = invoices.filter((_, i) => i !== index);
    setInvoices(updatedInvoices);
    localStorage.setItem('purchaseInvoices', JSON.stringify(updatedInvoices));
  };

  // Edit invoice handler
  const editInvoice = (index: number) => {
    setEditIndex(index);
    setEditedInvoice(invoices[index]);
  };

  // Save the edited invoice
  const saveEditedInvoice = () => {
    if (editedInvoice !== null && editIndex !== null) {
      const updatedInvoices = [...invoices];
      updatedInvoices[editIndex] = editedInvoice;
      setInvoices(updatedInvoices);
      localStorage.setItem('purchaseInvoices', JSON.stringify(updatedInvoices));
      setEditIndex(null);
      setEditedInvoice(null);
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          Purchase Invoices
        </h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search invoices..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-72"
          />
          <button
            onClick={() => navigate('/PurchaseForm')}
            className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700"
          >
            + Add Purchase Invoice
          </button>
        </div>
      </div>

      {/* Table to display invoices */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full bg-white border border-gray-200 rounded-md shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 border-b">
                Supplier
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 border-b">
                PI Number
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 border-b">
                Date
              </th>
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
            {invoices.length > 0 ? (
              invoices.map((invoice, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">
                    {invoice.supplier}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">
                    {invoice.piNumber}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">
                    {invoice.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">
                    {invoice.paymentTerms}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">
                    {invoice.account}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b flex space-x-4">
                    <button
                      onClick={() => editInvoice(index)}
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      <FiEdit className="mr-2" />
                      Edit
                    </button>
                    <button
                      onClick={() => deleteInvoice(index)}
                      className="text-red-600 hover:underline flex items-center"
                    >
                      <FiTrash className="mr-2" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                  No invoices found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {editIndex !== null && editedInvoice !== null && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h2 className="text-lg font-bold mb-4">Edit Invoice</h2>

            {/* Supplier Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Supplier
              </label>
              <input
                type="text"
                value={editedInvoice.supplier}
                onChange={(e) =>
                  setEditedInvoice({
                    ...editedInvoice,
                    supplier: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* PI Number Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                PI Number
              </label>
              <input
                type="text"
                value={editedInvoice.piNumber}
                onChange={(e) =>
                  setEditedInvoice({
                    ...editedInvoice,
                    piNumber: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Date Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                value={editedInvoice.date}
                onChange={(e) =>
                  setEditedInvoice({ ...editedInvoice, date: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Payment Terms Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Payment Terms
              </label>
              <input
                type="text"
                value={editedInvoice.paymentTerms}
                onChange={(e) =>
                  setEditedInvoice({
                    ...editedInvoice,
                    paymentTerms: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Account Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Account
              </label>
              <input
                type="text"
                value={editedInvoice.account}
                onChange={(e) =>
                  setEditedInvoice({
                    ...editedInvoice,
                    account: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Save and Cancel Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  setEditIndex(null);
                  setEditedInvoice(null);
                }}
                className="bg-gray-400 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={saveEditedInvoice}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>


  );
}
