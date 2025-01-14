const mongoose = require('mongoose'); 
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); 

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Email: { 
    type: String, 
    required: true, 
    unique: true, 
    validate: {
      validator: function(v) {
        return /\S+@\S+\.\S+/.test(v); // Basic email format validation
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  phone: { type: String, required: true },
  address: { type: String },
  department: { type: String },
  company: { type: String },
  notes: { type: String },
  email: { type: String },
  image: { type: String },
  status: { type: String, enum: ['online', 'offline'], default: 'offline' },  
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
