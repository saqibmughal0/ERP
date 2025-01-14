
const express = require('express');
const Supplier = require('../../module/PurchaseInvoices/ManageSupplier');  // Import the Supplier model
const router = express.Router();

// Route to add a new supplier
router.post('/', async (req, res) => {
  try {
    const newSupplier = new Supplier(req.body);
    await newSupplier.save();
    res.status(200).json({ message: 'Supplier added successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding supplier', error });
  }
});

// Get all invoices
router.get('/', async (req, res) => {
    try {
      const invoices = await Supplier.find();
      res.status(200).json(invoices);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error fetching invoices' });
    }
  });
  
  // In routes/invoiceRoute.js
  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Invoice.findByIdAndDelete(id);  // Delete the invoice by ID
      res.status(200).json({ message: 'Invoice deleted successfully!' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error deleting invoice' });
    }
  });

// Other routes like GET, PUT, DELETE can be added similarly

module.exports = router;
