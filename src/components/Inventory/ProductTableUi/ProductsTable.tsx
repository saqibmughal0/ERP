import { useState, useEffect } from 'react';
import axios from 'axios';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Product {
  _id: string;
  productImage: string;
  product: string;
  sku: string;
  category: string;
  brand: string;
  price: string;
  unit: string;
  quantity: number;
  createdby: string;
}

const ProductsTable = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products from the backend
    axios
      .get<Product[]>('http://localhost:5000/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  // Delete a single product
  const deleteProduct = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id)); // Update state
      alert('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product.');
    }
  };

  // Delete multiple products
  const deleteSelectedProducts = async () => {
    try {
      await Promise.all(
        selectedProducts.map((id) => axios.delete(`http://localhost:5000/api/products/${id}`))
      );
      setProducts(products.filter((product) => !selectedProducts.includes(product._id)));
      setSelectedProducts([]);
      alert('Selected products deleted successfully!');
    } catch (error) {
      console.error('Error deleting selected products:', error);
      alert('Failed to delete selected products.');
    }
  };

  // Handle select/unselect products
  const toggleSelectProduct = (id: string) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((productId) => productId !== id) : [...prev, id]
    );
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product List</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          onClick={() => {
            navigate('/CreateProduct');
          }}
        >
          Add New
        </button>
      </div>

      <div className="bg-white h-screen rounded p-9">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for items..."
          className="p-2 w-1/4 border border-gray-300 rounded-md shadow-sm focus:outline-none"
        />
        <button
          className="bg-red-500 text-white px-4 py-2 ml-4 rounded shadow hover:bg-red-600"
          onClick={deleteSelectedProducts}
          disabled={selectedProducts.length === 0}
        >
          Delete Selected
        </button>

        <table className="w-full table-auto border-collapse mt-4">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedProducts(products.map((product) => product._id));
                    } else {
                      setSelectedProducts([]);
                    }
                  }}
                  checked={selectedProducts.length === products.length && products.length > 0}
                />
              </th>
              <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">Product</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">SKU</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">Category</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">Brand</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">Price</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">Unit</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">Qty</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">Created By</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr key={product._id} className="hover:bg-gray-100 border-b">
                <td className="p-3 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product._id)}
                    onChange={() => toggleSelectProduct(product._id)}
                  />
                </td>
                <td className="p-3 text-sm text-gray-800 flex items-center">
                  <img src={product.productImage} alt={product.product} className="w-8 h-8 rounded-full mr-3" />
                  {product.product}
                </td>
                <td className="p-3 text-sm text-gray-800">{product.sku}</td>
                <td className="p-3 text-sm text-gray-800">{product.category}</td>
                <td className="p-3 text-sm text-gray-800">{product.brand}</td>
                <td className="p-3 text-sm text-gray-800">{product.price}</td>
                <td className="p-3 text-sm text-gray-800">{product.unit}</td>
                <td className="p-3 text-sm text-gray-800">{product.quantity}</td>
                <td className="p-3 text-sm text-gray-800">{product.createdby}</td>
                <td className="p-3 text-sm text-gray-800 flex space-x-2">
                  <button className="text-blue-500">
                    <FiEdit />
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => deleteProduct(product._id)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
    </div>
  );
};

export default ProductsTable;



