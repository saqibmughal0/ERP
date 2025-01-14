const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  item: String,
  cost: String,
  qty: String,
  price: String,
});

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: String,
  dateIssued: String,
  dueDate: String,
  invoiceTo: String,
  items: [itemSchema],
  salesperson: String,
  notes: String,
  thanks: String,
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
