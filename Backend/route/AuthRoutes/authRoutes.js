const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../module/Authentication/Authentication");
const router = express.Router();


router.post('/register', async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });
  
      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error registering user:", error); // Log the error
      res.status(500).json({ message: "Error registering user" });
    }
  });
  

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Error logging in" });
  }
});


router.get('/register', async (req, res) => {
  try {
    const email = await User.find();  // Fetch all clients
    res.json({ email });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching client data', error: err });
  }
});



module.exports = router;
