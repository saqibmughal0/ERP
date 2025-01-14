const express = require('express');
const router = express.Router();
const Contact = require('../../module/Contact/AddContact');


// Create a new contact
router.post('/contacts', async (req, res) => {
  try {
    // Ensure the email is present and valid
    if (!req.body.Email || req.body.Email.trim() === "") {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Check if the email already exists
    const existingContact = await Contact.findOne({ Email: req.body.Email });
    if (existingContact) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create and save the new contact
    const contact = new Contact(req.body);
    await contact.save();
    console.log(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



// Get all contacts
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a contact
router.put('/contacts/:id', async (req, res) => {
  console.log(req.body)
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a contact
router.delete('/contacts/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Contact deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




module.exports = router;
