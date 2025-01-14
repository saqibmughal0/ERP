import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import Logo from "../../images/logo/Kick.png"

interface Item {
  item: string;
  cost: string;
  qty: string;
  price: string;
}

interface FormData {
  invoiceNumber: string;
  dateIssued: string;
  dueDate: string;
  invoiceTo: string;
  items: Item[];
  salesperson: string;
  notes: string;
  thanks: string;
  qty: string;
}

function InvoiceForm() {
  const initialFormData: FormData = {
    invoiceNumber: '',
    dateIssued: '',
    dueDate: '',
    invoiceTo: '',
    items: [{ item: '', cost: '', qty: '', price: '' }],
    salesperson: '',
    notes: '',
    thanks: "",
    qty: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    index: number = -1,
  ) => {
    const { name, value } = e.target;

    if (
      name === 'item' ||
      name === 'cost' ||
      name === 'qty' ||
      name === 'price'
    ) {
      const updatedItems = [...formData.items];
      updatedItems[index][name as keyof Item] = value;
      setFormData({ ...formData, items: updatedItems });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { item: '', cost: '', qty: '', price: '' }],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/saveInvoice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Invoice saved successfully!');
      setFormData(initialFormData);
    } else {
      alert('Error saving invoice');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-8">
        <div className="p-6 bg-white shadow-md rounded-lg w-full lg:w-[80rem]">
          {/* Invoice Info */}
          <div className="w-full bg-[#F2F3F4] flex flex-wrap lg:flex-nowrap items-center justify-between p-5 rounded-lg">
            <div className="mb-6">
              {/* <h3 className="text-lg font-semibold">Your Company</h3> */}
              <img src={Logo} className='w-[10rem]' alt="Kicks" />
              <p>Office Address</p>
              <p>Phone: 123-456-7890</p>
            </div>
            <div className="space-y-2 w-full lg:w-auto">
              <div className="flex items-center space-x-7">
                <label className="text-[1rem] font-bold">Invoice:</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2 w-full lg:w-[10rem]">
                  <span className="mr-2">#</span>
                  <input
                    type="text"
                    name="invoiceNumber"
                    className="border-0 bg-gray-100 outline-none flex-1 w-full"
                    placeholder="45678"
                    value={formData.invoiceNumber}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <label className="block text-sm font-medium mb-2">
                  Date Issued:
                </label>
                <input
                  type="date"
                  name="dateIssued"
                  className="border border-gray-300 bg-gray-100 rounded-md p-2 w-full lg:w-[10rem]"
                  value={formData.dateIssued}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex items-center space-x-6">
                <label className="block text-sm font-medium mb-2">
                  Due Date:
                </label>
                <input
                  type="date"
                  name="dueDate"
                  className="border border-gray-300 bg-gray-100 rounded-md p-2 w-full lg:w-[9.90rem]"
                  value={formData.dueDate}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>

          {/* Invoice To */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 mt-5">
            <div>
              <label className="block text-sm font-medium mb-2">
                Invoice To
              </label>
              <select
                name="invoiceTo"
                className="border border-gray-300 rounded-md p-3 w-full md:w-[12rem]"
                value={formData.invoiceTo}
                onChange={(e) => handleChange(e)}
              >
                <option value="">Select Company</option>
                <option value="Company A">Company A</option>
                <option value="Company B">Company B</option>
              </select>
            </div>
          </div>

          {/* Items Section */}
          <div className="mb-6">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-l-0 border-r-0 border-b-0 mt-6">
                <thead>
                  <tr>
                    <th className=" p-6 text-left">Item</th>
                    <th className=" p-6 text-left">Cost</th>
                    <th className=" p-6 text-left">Qty</th>
                    <th className=" p-6 text-left">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.items.map((item, index) => (
                    <tr key={index} className="border">
                      <td className="p-6">
                        <input
                          type="text"
                          name="item"
                          className="border border-gray-300 p-2 w-full rounded-md"
                          placeholder="Item"
                          value={item.item}
                          onChange={(e) => handleChange(e, index)}
                        />
                      </td>
                      <td className="p-6">
                        <input
                          type="text"
                          name="cost"
                          className="border border-gray-300 p-2 w-full rounded-md"
                          placeholder="00"
                          value={item.cost}
                          onChange={(e) => handleChange(e, index)}
                        />
                      </td>
                      <td className="p-6">
                        <input
                          type="text"
                          name="qty"
                          className="border border-gray-300 p-2 w-full rounded-md"
                          placeholder="1"
                          value={item.qty}
                          onChange={(e) => handleChange(e, index)}
                        />
                      </td>
                      <td className="p-6">
                        <input
                          type="text"
                          name="price"
                          className="border border-gray-300 p-2 w-full rounded-md"
                          placeholder="0.00"
                          value={item.price}
                          onChange={(e) => handleChange(e, index)}
                        />
                      </td>
                      <td className="p-6">
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              items: formData.items.filter((_, i) => i !== index),
                            })
                          }
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              type="button"
              onClick={addItem}
              className="mt-4 text-sm bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
            >
              Add Item
            </button>
          </div>

          {/* Footer */}
          <div className="flex flex-wrap justify-between mt-10">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <label className="block text-lg font-medium">Salesperson:</label>
              <input
                type="text"
                name="salesperson"
                className="border border-gray-300 rounded-md p-2 w-full md:w-[20rem]"
                value={formData.salesperson}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-between mt-10">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <input
                type="text"
                name="thanks"
                placeholder='thanks'
                className="border border-gray-300 rounded-md p-2 w-full md:w-[20rem]"
                value={formData.thanks}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="flex flex-wrap space-y-3 mt-7 pt-8 border border-l-0 border-r-0 border-b-0">
            <label className="block text-lg font-medium w-full mt-5 md:w-auto">
              Notes:
            </label>
            <textarea
              name="notes"
              className="border w-full md:w-[20rem] ml-4"
              value={formData.notes}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
        </div>


          {/* Submit Button */}
          {/* <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md"
            >
              Save Invoice
            </button>
          </div> */}
                  <div className="w-full lg:w-[30rem] h-[17rem] p-6 bg-white shadow-md rounded-lg space-y-4">
         <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700"
          >
            Save Invoice
          </button>
        </div>
        </div>
      
    </form>
  );
}

export default InvoiceForm;
