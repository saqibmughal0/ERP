const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  store: { type: String, required: true },
  warehouse: { type: String, required: true },
  slug: { type: String, required: true },
  productName: { type: String, required: true },
  sku: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  subsubCategory: { type: String, required: true },
  brand: { type: String, required: true },
  unit: { type: String, required: true },
  sellingtype: { type: String, required: true },
  itemCode: { type: String, required: true },
  productType: { type: String, required: true },
  quantity: { type: String, required: true },
  price: { type: String, required: true },
  discountType: { type: String, required: true },
  discountValue: { type: String, required: true },
  quantityAlert: { type: String, required: true },

});

module.exports = mongoose.model('Product', productSchema);
