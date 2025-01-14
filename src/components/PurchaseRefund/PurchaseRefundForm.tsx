



// import React, { useState, useEffect } from 'react';


// interface Item {
//   item: string;
//   description: string;
//   unitPrice: string;
//   quantity: string;
//   discount: string;
//   tax: string;
//   subtotal: number;
//   orderDate: string;  // Added orderDate to store in the table
//   dueDate: string;    // Added dueDate to store in the table
// }

// interface Invoice {
//   supplier: string;
//   puNumber: string;
//   orderDate: string;
//   dueDate: string;
//   paymentTerms: string;
//   account: string;
//   items: Item[];
// }

// const PurchaseRefundForm: React.FC = () => {
//   const [supplier, setSupplier] = useState<string>('');
//   const [puNumber, setPuNumber] = useState<string>('');
//   const [orderDate, setOrderDate] = useState<string>('');
//   const [dueDate, setDueDate] = useState<string>('');
//   const [paymentTerms, setPaymentTerms] = useState<string>('');
//   const [account, setAccount] = useState<string>('Default Account');
//   const [items, setItems] = useState<Item[]>([
//     {
//       item: '',
//       description: '',
//       unitPrice: '',
//       quantity: '',
//       discount: '',
//       tax: '',
//       subtotal: 0,
//       orderDate: '',
//       dueDate: '',
//     },
//   ]);

//   // Auto-generate PU number on component mount
//   useEffect(() => {
//     const existingRefundInvoices: Invoice[] = JSON.parse(
//       localStorage.getItem('purchaseRefund') || '[]',
//     );

//     // Get the last PU number and increment it
//     const lastPuNumber = existingRefundInvoices.length
//       ? existingRefundInvoices[existingRefundInvoices.length - 1].puNumber
//       : 'RF-0';

//     const nextNumber = parseInt(lastPuNumber.split('-')[1]) + 1;
//     setPuNumber(`RF-${nextNumber}`);
//   }, []);

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent): void => {
//     e.preventDefault();

//     const invoiceRefundData: Invoice = {
//       supplier,
//       puNumber,
//       orderDate,
//       dueDate,
//       paymentTerms,
//       account,
//       items,
//     };

//     const existingRefundInvoices: Invoice[] = JSON.parse(
//       localStorage.getItem('purchaseRefund') || '[]',
//     );

//     existingRefundInvoices.push(invoiceRefundData);
//     localStorage.setItem('purchaseRefund', JSON.stringify(existingRefundInvoices));

//     // Reset form fields
//     setSupplier('');
//     setOrderDate('');
//     setDueDate('');
//     setPaymentTerms('');
//     setAccount('Default Account');
//     setItems([
//       {
//         item: '',
//         description: '',
//         unitPrice: '',
//         quantity: '',
//         discount: '',
//         tax: '',
//         subtotal: 0,
//         orderDate: '',
//         dueDate: '',
//       },
//     ]);

//     // Generate next PU number
//     const nextNumber = parseInt(puNumber.split('-')[1]) + 1;
//     setPuNumber(`PU-${nextNumber}`);
//   };

//   // Handle changes to individual item fields
//   const handleItemChange = (
//     index: number,
//     field: keyof Item,
//     value: string,
//   ): void => {
//     const updatedItems = [...items];
//     updatedItems[index][field] = value;

//     // Calculate subtotal dynamically
//     if (field === 'unitPrice' || field === 'quantity') {
//       const unitPrice = parseFloat(updatedItems[index].unitPrice) || 0;
//       const quantity = parseFloat(updatedItems[index].quantity) || 0;
//       updatedItems[index].subtotal = unitPrice * quantity;
//     }

//     setItems(updatedItems);
//   };

//   // Add a new item to the list
//   const handleAddItem = (): void => {
//     setItems([
//       ...items,
//       {
//         item: '',
//         description: '',
//         unitPrice: '',
//         quantity: '',
//         discount: '',
//         tax: '',
//         subtotal: 0,
//         orderDate,
//         dueDate,
//       },
//     ]);
//   };

//   // Remove an item from the list
//   const handleRemoveItem = (index: number): void => {
//     setItems(items.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-8">
//       <h2 className="text-2xl font-semibold mb-6 text-gray-800">
//          Purchase Refund
//       </h2>
//       <form onSubmit={handleSubmit}>
//         {/* Supplier Name */}
//         <div className="mb-6">
//           <label className="block text-gray-700 font-medium mb-2">
//             Supplier Name
//           </label>
//           <input
//             type="text"
//             placeholder="Enter supplier name"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
//             value={supplier}
//             onChange={(e) => setSupplier(e.target.value)}
//             required
//           />
//         </div>

//         {/* P.U. Number */}
//         <div className="mb-6">
//           <label className="block text-gray-700 font-medium mb-2">
//             P.U. Number
//           </label>
//           <input
//             type="text"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 bg-gray-100 cursor-not-allowed"
//             value={puNumber}
//             readOnly
//           />
//         </div>

//         {/* Order Date */}
//         <div className="mb-6">
//           <label className="block text-gray-700 font-medium mb-2">
//             Order Date
//           </label>
//           <input
//             type="date"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
//             value={orderDate}
//             onChange={(e) => setOrderDate(e.target.value)}
//             required
//           />
//         </div>

//         {/* Due Date */}
//         <div className="mb-6">
//           <label className="block text-gray-700 font-medium mb-2">
//             Due Date
//           </label>
//           <input
//             type="date"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
//             value={dueDate}
//             onChange={(e) => setDueDate(e.target.value)}
//             required
//           />
//         </div>

//         {/* Payment Terms */}
//         <div className="mb-6">
//           <label className="block text-gray-700 font-medium mb-2">
//             Payment Terms
//           </label>
//           <select
//             className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
//             value={paymentTerms}
//             onChange={(e) => setPaymentTerms(e.target.value)}
//             required
//           >
//             <option value="" disabled>
//               Select Payment Terms
//             </option>
//             <option value="Cash">Cash</option>
//             <option value="Cheque">Cheque</option>
//             <option value="Bank Transfer">Bank Transfer</option>
//             <option value="Supplier Credit">Supplier Credit</option>
//           </select>
//         </div>

//         {/* Items Table */}
//         <div className="overflow-x-auto mb-6">
//           <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-4 py-2 text-left border-b">Item</th>
//                 <th className="px-4 py-2 text-left border-b">Description</th>
//                 <th className="px-4 py-2 text-left border-b">Unit Price</th>
//                 <th className="px-4 py-2 text-left border-b">Quantity</th>
//                 <th className="px-4 py-2 text-left border-b">Subtotal</th>
//                 <th className="px-4 py-2 text-left border-b">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, index) => (
//                 <tr key={index}>
//                   <td className="px-4 py-2 border-b">
//                     <input
//                       type="text"
//                       className="w-full px-2 py-1 border rounded"
//                       placeholder="Item"
//                       value={item.item}
//                       onChange={(e) =>
//                         handleItemChange(index, 'item', e.target.value)
//                       }
//                     />
//                   </td>
//                   <td className="px-4 py-2 border-b">
//                     <input
//                       type="text"
//                       className="w-full px-2 py-1 border rounded"
//                       placeholder="Description"
//                       value={item.description}
//                       onChange={(e) =>
//                         handleItemChange(index, 'description', e.target.value)
//                       }
//                     />
//                   </td>
//                   <td className="px-4 py-2 border-b">
//                     <input
//                       type="number"
//                       className="w-full px-2 py-1 border rounded"
//                       placeholder="Unit Price"
//                       value={item.unitPrice}
//                       onChange={(e) =>
//                         handleItemChange(index, 'unitPrice', e.target.value)
//                       }
//                     />
//                   </td>
//                   <td className="px-4 py-2 border-b">
//                     <input
//                       type="number"
//                       className="w-full px-2 py-1 border rounded"
//                       placeholder="Quantity"
//                       value={item.quantity}
//                       onChange={(e) =>
//                         handleItemChange(index, 'quantity', e.target.value)
//                       }
//                     />
//                   </td>
//                   <td className="px-4 py-2 border-b text-right">
//                     {item.subtotal.toFixed(2)}
//                   </td>
//                   <td className="px-4 py-2 border-b text-center">
//                     <button
//                       type="button"
//                       className="bg-red-500 text-white px-2 py-1 rounded"
//                       onClick={() => handleRemoveItem(index)}
//                     >
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Add Item Button */}
//         <button
//           type="button"
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//           onClick={handleAddItem}
//         >
//           Add Item
//         </button>

//         {/* Submit Button */}
//         <div className="text-right mt-6">
//           <button
//             type="submit"
//             className="bg-green-600 text-white px-6 py-3 rounded-lg"
//           >
//             Save Invoice
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PurchaseRefundForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define interfaces
interface Item {
  item: string;
  description: string;
  unitPrice: string;
  quantity: string;
  discount: string;
  tax: string;
  subtotal: number;
}

interface Invoice {
  supplier: string;
  puNumber: string;
  orderDate: string;
  dueDate: string;
  paymentTerms: string;
  account: string;
  items: Item[];
}

const PurchaseRefundForm: React.FC = () => {
  const [supplier, setSupplier] = useState<string>('');
  const [puNumber, setPuNumber] = useState<string>('RF-1');
  const [orderDate, setOrderDate] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [paymentTerms, setPaymentTerms] = useState<string>('');
  const [account, setAccount] = useState<string>('Default Account');
  const [items, setItems] = useState<Item[]>([
    {
      item: '',
      description: '',
      unitPrice: '',
      quantity: '',
      discount: '',
      tax: '',
      subtotal: 0,
    },
  ]);

  // Fetch existing invoices to set the next PU number
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/refund')
      .then((response) => {
        const existingInvoices: Invoice[] = response.data;
        const lastPuNumber = existingInvoices.length
          ? existingInvoices[existingInvoices.length - 1].puNumber
          : 'RF-0';
        const nextNumber = parseInt(lastPuNumber.split('-')[1]) + 1;
        setPuNumber(`RF-${nextNumber}`);
      })
      .catch((error) => console.error('Error fetching invoices:', error));
  }, []);

  // Handle changes in item fields
  const handleItemChange = (index: number, field: keyof Item, value: string) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;

    // Calculate subtotal when unitPrice or quantity is updated
    if (field === 'unitPrice' || field === 'quantity') {
      const unitPrice = parseFloat(updatedItems[index].unitPrice) || 0;
      const quantity = parseInt(updatedItems[index].quantity) || 0;
      updatedItems[index].subtotal = unitPrice * quantity;
    }

    setItems(updatedItems);
  };

  // Add a new item row
  const addItem = () => {
    setItems([
      ...items,
      {
        item: '',
        description: '',
        unitPrice: '',
        quantity: '',
        discount: '',
        tax: '',
        subtotal: 0,
      },
    ]);
  };

  // Remove an item row
  const removeItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const invoiceRefundData: Invoice = {
      supplier,
      puNumber,
      orderDate,
      dueDate,
      paymentTerms,
      account,
      items,
    };

    try {
      // Post the data to your backend
      await axios.post('http://localhost:5000/api/refund', invoiceRefundData);

      // Reset form fields
      setSupplier('');
      setOrderDate('');
      setDueDate('');
      setPaymentTerms('');
      setAccount('Default Account');
      setItems([
        {
          item: '',
          description: '',
          unitPrice: '',
          quantity: '',
          discount: '',
          tax: '',
          subtotal: 0,
        },
      ]);

      // Generate the next PU number
      const nextNumber = parseInt(puNumber.split('-')[1]) + 1;
      setPuNumber(`RF-${nextNumber}`);
    } catch (error) {
      console.error('Error saving invoice:', error);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Purchase Refund Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Supplier</label>
          <input
            type="text"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Order Date</label>
            <input
              type="date"
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>
        </div>
        <div>
          <label className="block font-medium">Payment Terms</label>
          <input
            type="text"
            value={paymentTerms}
            onChange={(e) => setPaymentTerms(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium">Account</label>
          <input
            type="text"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Items</h2>
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-6 gap-4 items-end mb-2">
              <input
                type="text"
                placeholder="Item"
                value={item.item}
                onChange={(e) => handleItemChange(index, 'item', e.target.value)}
                className="border rounded p-2"
              />
              <input
                type="text"
                placeholder="Description"
                value={item.description}
                onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                className="border rounded p-2"
              />
              <input
                type="number"
                placeholder="Unit Price"
                value={item.unitPrice}
                onChange={(e) => handleItemChange(index, 'unitPrice', e.target.value)}
                className="border rounded p-2"
              />
              <input
                type="number"
                placeholder="Quantity"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                className="border rounded p-2"
              />
              <span className="p-2 border rounded">
                Subtotal: {item.subtotal.toFixed(2)}
              </span>
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addItem}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Add Item
          </button>
        </div>
        <div className='flex justify-end'>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default PurchaseRefundForm;
