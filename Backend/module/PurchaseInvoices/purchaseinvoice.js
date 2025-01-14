const mongoose = require('mongoose');

// Item schema
const itemSchema = new mongoose.Schema({
  item: { type: String, required: true },
  description: { type: String },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  discount: { type: String },
  tax: { type: String },
  subtotal: { type: Number, required: true },
});

// Invoice schema
const purchaseinvoiceSchema = new mongoose.Schema({
  supplier: { type: String, required: true },
  puNumber: { type: String, unique: true, required: true },
  orderDate: { type: Date, required: true },
  dueDate: { type: Date, required: true },
  paymentTerms: { type: String },
  account: { type: String },
  items: [itemSchema],
});

module.exports = mongoose.model('purchaseinvoice', purchaseinvoiceSchema);
