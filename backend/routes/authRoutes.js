const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

// TEMP: hardcoded admin
const adminUser = {
  username: "admin",
  // password: "password123" hashed:
  passwordHash: "$2b$10$Q9k8s8JH0kY2x9FJt8dUu9lYpQe9jFJt8dUu9lYpQe9jFJt8dUu"
};


// Login route
router.post("/login", async (req, res) =>{
    const { username, password } = req.body;

    if (username !== adminUser.username)
        return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, adminUser.passwordHash);
    if (!isMatch)
        return res.status(400).json({ message: "Invalid credential" });

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
});

module.exports = router;