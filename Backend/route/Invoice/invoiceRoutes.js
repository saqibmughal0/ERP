const express = require('express');
const router = express.Router();
const Invoice = require('../../module/Invoice/Invoice');

// Create a new invoice
router.post('/saveInvoice', async (req, res) => {
  try {
    const newInvoice = new Invoice(req.body);
    await newInvoice.save();
    res.status(201).json({ message: 'Invoice saved successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error saving invoice' });
  }
});

// Get all invoices
router.get('/saveInvoice', async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching invoices' });
  }
});

// In routes/invoiceRoute.js
router.delete('/saveInvoice/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Invoice.findByIdAndDelete(id);  // Delete the invoice by ID
    res.status(200).json({ message: 'Invoice deleted successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error deleting invoice' });
  }
});


module.exports = router;
