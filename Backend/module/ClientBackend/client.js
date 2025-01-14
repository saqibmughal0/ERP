const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    clientType: String,
    fullName: String,
    firstName: String,
    lastName: String,
    email: String,
    streetAddress1: String,
    streetAddress2: String,
    city: String, 
    state: String,
    postalCode: String,
    telephone: String,
    mobile: String,
    category: String,
    invoicingmethod: String,
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
