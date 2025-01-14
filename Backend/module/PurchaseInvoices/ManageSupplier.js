const mongoose = require('mongoose');

// Supplier Schema
const supplierSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  firstName: String,
  lastName: String,
  telephone: String,
  mobile: String,
  streetAddress1: String,
  streetAddress2: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,
  vatNumber: String,
  codeNumber: String,
  currency: String,
  email: { type: String, required: true },
  category: String,
  notes: String,
  invoicingmethod: String,
  ntnNumber: String,
  idCardNumber: String,
  whatsApp: String,
  address: String,
  website: String,
  supplierID: String,
  openingBalance: String,
  openingBalanceDate: String,
  attachment: String, // If you're storing attachment URLs or paths
});

// Create and export the model
const Supplier = mongoose.model('Supplier', supplierSchema);
module.exports = Supplier;
