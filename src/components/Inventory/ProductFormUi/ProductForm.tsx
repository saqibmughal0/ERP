import React, { useState } from 'react';
import Accordion from './Accordion';
import ProductInput from './ProductInput';
import ProductSelect from './ProductSelect';
import ProductTextArea from './ProductTextArea';
import Notification from './Notification';


const ProductForm: React.FC = () => {
  const [isProductInfoOpen, setIsProductInfoOpen] = useState(true);
  const [isStockOpen, setIsStockOpen] = useState(true);
  const [isImageOpen, setIsImageOpen] = useState(true);
  const [product, setProduct] = useState({
    store: '',
    warehouse: '',
    slug: '',
    productName: '',
    sku: '',
    category: '',
    subCategory: '',
    subsubCategory: '',
    brand: '',
    unit: '',
    sellingtype: '',
    itemCode: '',
    productType: '',
    quantity: '',
    price: '',
    discountType: '',
    discountValue: '',
    quantityAlert: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Function to generate SKU
  const generateSKU = () => {
    const skuPrefix = 'PT';
    const newSkuNumber = String(Math.floor(Math.random() * 1000)).padStart(
      1,
      '0',
    );
    setProduct({ ...product, sku: `${skuPrefix}${newSkuNumber}` });
  };
  // Function to generate SKU
  const generateItemCode = () => {
    const itemcodePrefix = '#';
    const newItemCodeNumber = String(Math.floor(Math.random() * 1000)).padStart(
      1,
      '0',
    );
    setProduct({
      ...product,
      itemCode: `${itemcodePrefix}${newItemCodeNumber}`,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage('Product added successfully!');
        console.log('Product added:', result);
        setShowNotification(true); // Show the notification
        setTimeout(() => setShowNotification(false), 3000); // Hide it after 3 seconds
        // Reset form
        setProduct({
          store: '',
          warehouse: '',
          productName: '',
          slug: '',
          sku: '',
          category: '',
          subCategory: '',
          subsubCategory: '',
          brand: '',
          unit: '',
          sellingtype: '',
          itemCode: '',
          productType: '',
          quantity: '',
          price: '',
          discountType: '',
          discountValue: '',
          quantityAlert: '',
          description: '',
        });
      } else {
        const error = await response.json();
        setMessage(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error submitting product:', error);
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* {message && <p className="text-red-500 mt-4">{message}</p>} */}

      {showNotification && (
        <Notification
          message="Product added successfully!"
          onClose={() => setShowNotification(false)}
        />
      )}
      
      <Accordion
        title="Product Information"
        isOpen={isProductInfoOpen}
        onToggle={() => setIsProductInfoOpen(!isProductInfoOpen)}
      >
        <div className="grid grid-cols-3 gap-4 mt-5">
          <ProductSelect
            label="Store"
            name="store"
            value={product.store}
            options={[
              { label: 'Store 1', value: 'store1' },
              { label: 'Store 2', value: 'store2' },
            ]}
            onChange={handleInputChange}
          />
          <ProductSelect
            label="warehouse"
            name="warehouse"
            value={product.warehouse}
            options={[
              { label: 'Warehouse 1', value: 'warehouse1' },
              { label: 'Warehouse 2', value: 'warehouse2' },
            ]}
            onChange={handleInputChange}
          />
          <ProductInput
            label="Product Name"
            name="productName"
            value={product.productName}
            onChange={handleInputChange}
          />
          <ProductInput
            label="Slug"
            name="slug"
            value={product.slug}
            onChange={handleInputChange}
          />
          <div>
            <ProductInput
              label="SKU"
              name="sku"
              value={product.sku}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={generateSKU}
              className="bg-[#F5CD62] text-white p-2 rounded absolute -mt-10.5 ml-[15.2rem]"
            >
              Generate Code
            </button>
          </div>
          <ProductSelect
            label="Category"
            name="category"
            value={product.category}
            options={[
              { label: 'Brand 1', value: 'category1' },
              { label: 'Brand 2', value: 'category2' },
            ]}
            onChange={handleInputChange}
          />
          <ProductSelect
            label="Sub Category"
            name="subCategory"
            value={product.subCategory}
            options={[
              { label: 'Kicks', value: 'subCategory1' },
              { label: 'IBN Kushi', value: 'subCategory2' },
            ]}
            onChange={handleInputChange}
          />
          <ProductSelect
            label="Sub Sub Category"
            name="subsubCategory"
            value={product.subsubCategory}
            options={[
              { label: 'Polish', value: 'subsubCategory1' },
              { label: 'Shoes', value: 'subsubCategory2' },
            ]}
            onChange={handleInputChange}
          />
          <ProductSelect
            label="Brand"
            name="brand"
            value={product.brand}
            options={[
              { label: 'Kicks', value: 'brand1' },
              { label: 'IBN Kushi', value: 'brand2' },
            ]}
            onChange={handleInputChange}
          />
          <ProductSelect
            label="Unit"
            name="unit"
            value={product.unit}
            options={[
              { label: 'Kg', value: 'unit1' },
              { label: 'pc', value: 'unit2' },
            ]}
            onChange={handleInputChange}
          />
          <ProductSelect
            label="Selling Type"
            name="sellingtype"
            value={product.sellingtype}
            options={[
              { label: 'Transactional Selling', value: 'sellingtype1' },
              { label: 'Solution Selling', value: 'sellingtype2' },
            ]}
            onChange={handleInputChange}
          />
          <div>
            <ProductInput
              label="Item Code"
              name="itemCode"
              value={product.itemCode}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={generateItemCode}
              className="bg-[#F5CD62] text-white p-2 rounded absolute -mt-10.5 ml-[15.2rem]"
            >
              Generate Code
            </button>
          </div>
        </div>
        <ProductTextArea
          label="Description"
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
      </Accordion>

      <Accordion
        title="Pricing & Stocks"
        isOpen={isStockOpen}
        onToggle={() => setIsStockOpen(!isStockOpen)}
      >
        <div className="mt-4">
          <p className="font-medium mb-2">Product Type</p>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="productType"
                value="single"
                checked={product.productType === 'single'}
                onChange={handleInputChange}
                className="mr-2"
              />
              Single Product
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="productType"
                value="variable"
                checked={product.productType === 'variable'}
                onChange={handleInputChange}
                className="mr-2"
              />
              Variable Product
            </label>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <ProductInput
            label="Quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
          />
          <ProductInput
            label="Price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
          <ProductSelect
            label="Discount Type"
            name="discountType"
            value={product.discountType}
            options={[
              { label: 'Percentege', value: 'discountType1' },
              { label: 'Shoes', value: 'discountType2' },
            ]}
            onChange={handleInputChange}
          />
          <ProductInput
            label="Discount Value"
            name="discountValue"
            value={product.discountValue}
            onChange={handleInputChange}
          />
          <ProductInput
            label="Quantity Alert"
            name="quantityAlert"
            value={product.quantityAlert}
            onChange={handleInputChange}
          />
        </div>
      </Accordion>
      <Accordion
        title="Product Images"
        isOpen={isImageOpen}
        onToggle={() => setIsImageOpen(!isImageOpen)}
      >
        <div className="grid grid-cols-3 gap-4 mt-5">
          {/* Image Upload */}
          <div className="mt-4">
            <p className="font-medium mb-2">Upload Images</p>
            <input
              type="file"
              multiple
              className="block w-full border p-2 rounded"
            />
            {/* {images.length > 0 && (
            <div className="mt-2">
              <p className="text-gray-700">Selected Images:</p>
              <ul className="list-disc ml-5">
                {images.map((image, index) => (
                  <li key={index}>{image.name}</li>
                ))}
              </ul>
            </div>
          )} */}
          </div>
        </div>
      </Accordion>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Add Product'}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
