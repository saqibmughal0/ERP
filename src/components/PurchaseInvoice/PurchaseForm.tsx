import React, { useState } from "react";

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
  piNumber: string;
  date: string;
  paymentTerms: string;
  account: string;
  items: Item[];
}

const PurchaseForm: React.FC = () => {
  const [supplier, setSupplier] = useState<string>("");
  const [piNumber, setPiNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [paymentTerms, setPaymentTerms] = useState<string>("");
  const [account, setAccount] = useState<string>("Default Account");
  const [items, setItems] = useState<Item[]>([
    {
      item: "",
      description: "",
      unitPrice: "",
      quantity: "",
      discount: "",
      tax: "",
      subtotal: 0,
    },
  ]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const invoiceData: Invoice = {
      supplier,
      piNumber,
      date,
      paymentTerms,
      account,
      items,
    };

    const existingInvoices: Invoice[] = JSON.parse(
      localStorage.getItem("purchaseInvoices") || "[]"
    );

    existingInvoices.push(invoiceData);
    localStorage.setItem("purchaseInvoices", JSON.stringify(existingInvoices));

    // Reset form fields
    setSupplier("");
    setPiNumber("");
    setDate("");
    setPaymentTerms("");
    setAccount("Default Account");
    setItems([
      {
        item: "",
        description: "",
        unitPrice: "",
        quantity: "",
        discount: "",
        tax: "",
        subtotal: 0,
      },
    ]);

  };

  // Handle changes to individual item fields
  const handleItemChange = (index: number, field: keyof Item, value: string): void => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;

    // Calculate subtotal dynamically
    if (field === "unitPrice" || field === "quantity") {
      const unitPrice = parseFloat(updatedItems[index].unitPrice) || 0;
      const quantity = parseFloat(updatedItems[index].quantity) || 0;
      updatedItems[index].subtotal = unitPrice * quantity;
    }

    setItems(updatedItems);
  };

  // Add a new item to the list
  const handleAddItem = (): void => {
    setItems([
      ...items,
      {
        item: "",
        description: "",
        unitPrice: "",
        quantity: "",
        discount: "",
        tax: "",
        subtotal: 0,
      },
    ]);
  };

  // Remove an item from the list
  const handleRemoveItem = (index: number): void => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add Purchase Invoice</h2>
      <form onSubmit={handleSubmit}>
        {/* Supplier Name */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Supplier Name</label>
          <input
            type="text"
            placeholder="Enter supplier name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            required
          />
        </div>

        {/* P.I. Number */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">P.I. Number</label>
          <input
            type="text"
            placeholder="P.I. Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            value={piNumber}
            onChange={(e) => setPiNumber(e.target.value)}
          />
        </div>

        {/* Date */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Date</label>
          <input
            type="date"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        {/* Payment Terms */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Payment Terms</label>
          <input
            type="text"
            placeholder="Enter payment terms (e.g., Days)"
            className="w-full px-4 py-3 border rounded-lg"
            value={paymentTerms}
            onChange={(e) => setPaymentTerms(e.target.value)}
          />
        </div>

        {/* Items Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left border-b">Item</th>
                <th className="px-4 py-2 text-left border-b">Description</th>
                <th className="px-4 py-2 text-left border-b">Unit Price</th>
                <th className="px-4 py-2 text-left border-b">Quantity</th>
                <th className="px-4 py-2 text-left border-b">Subtotal</th>
                <th className="px-4 py-2 text-left border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b">
                    <input
                      type="text"
                      className="w-full px-2 py-1 border rounded"
                      placeholder="Item"
                      value={item.item}
                      onChange={(e) => handleItemChange(index, "item", e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 border-b">
                    <input
                      type="text"
                      className="w-full px-2 py-1 border rounded"
                      placeholder="Description"
                      value={item.description}
                      onChange={(e) => handleItemChange(index, "description", e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 border-b">
                    <input
                      type="number"
                      className="w-full px-2 py-1 border rounded"
                      placeholder="Unit Price"
                      value={item.unitPrice}
                      onChange={(e) => handleItemChange(index, "unitPrice", e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 border-b">
                    <input
                      type="number"
                      className="w-full px-2 py-1 border rounded"
                      placeholder="Quantity"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 border-b text-right">
                    {item.subtotal.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    <button
                      type="button"
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleRemoveItem(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Item Button */}
        <button
          type="button"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleAddItem}
        >
          Add Item
        </button>

        {/* Submit Button */}
        <div className="text-right mt-6">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Save Invoice
          </button>
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;
