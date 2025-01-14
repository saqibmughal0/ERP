const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const clientRoutes = require('./module/ClientBackend/clientRoutes');
const contactRoutes = require('./route/ContactRoute/ContactRoutes');
const authRoutes = require('./route/AuthRoutes/authRoutes');
const invoiceRoute = require('./route/Invoice/invoiceRoutes');
const productRoutes = require('./route/Product/ProductRoutes');
const supplierRoutes = require('./route/PurchaseInvoiceRoutes/ManageSuppliers')
const PurchaseRefundRoutes = require('./route/PurchaseInvoiceRoutes/PurchaseRefund')
const PurchaseInvoiceRoutes = require('./route/PurchaseInvoiceRoutes/purchaseinvoice')


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const mongoURI =
  'mongodb+srv://erpdost:erp%40321@test.w4gye.mongodb.net/?retryWrites=true&w=majority&appName=test';
mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB Atlas connected'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas: ', err));

app.use('/api', clientRoutes);
app.use('/api', contactRoutes);
app.use('/api/auth/', authRoutes);
app.use('/api', invoiceRoute);
app.use('/api/products', productRoutes);
app.use('/api/supplier', supplierRoutes);
app.use('/api/refund', PurchaseRefundRoutes);
app.use('/api/purchaseinvoice', PurchaseInvoiceRoutes);



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
