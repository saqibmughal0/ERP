const express = require('express');
const Invoice = require('../../module/PurchaseInvoices/purchaseinvoice');
const router = express.Router();

// GET all invoices
router.get('/', async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch invoices' });
  }
});

// POST a new invoice
router.post('/', async (req, res) => {
  const { supplier, puNumber, orderDate, dueDate, paymentTerms, account, items } = req.body;

  try {
    const newInvoice = new Invoice({
      supplier,
      puNumber,
      orderDate,
      dueDate,
      paymentTerms,
      account,
      items,
    });

    await newInvoice.save();
    res.status(201).json({ message: 'Invoice created successfully', invoice: newInvoice });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create invoice' });
  }
});

// DELETE an invoice by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Invoice.findByIdAndDelete(id);
    res.status(200).json({ message: 'Invoice deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete invoice' });
  }
});

module.exports = router;
