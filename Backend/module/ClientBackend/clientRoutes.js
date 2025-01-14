const express = require('express');
const Client = require('../ClientBackend/client');
const router = express.Router();

router.post('/clients', async (req, res) => {
    const { clientType, fullName, firstName, lastName, email, streetAddress1, streetAddress2, city, state, postalCode, telephone, mobile, category, invoicingmethod } = req.body;
    console.log('Request Body:', req.body);

    try {
        const newClient = new Client({ clientType, fullName, firstName, lastName, email, streetAddress1, streetAddress2, city, state, postalCode, telephone, mobile, category, invoicingmethod });
        await newClient.save();
        console.log('New Client Saved:', newClient);
        res.status(200).send('Client added successfully');
    } catch (error) {
        console.error('Error saving client:', error);
        res.status(500).send('Failed to save client to the database');
    }
});

// API Routes
// Get all clients
router.get('/clients', async (req, res) => {
    try {
      const clients = await Client.find();  // Fetch all clients
      res.json({ clients });
    } catch (err) {
      res.status(500).json({ message: 'Error fetching client data', error: err });
    }
  });


module.exports = router;
