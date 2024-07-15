// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle POST request to /submit
app.post('/submit', (req, res) => {
    const { name, email, model, payment } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Car Model: ${model}, Payment Method: ${payment}`);
    
    // Handle form submission logic here

    // For now, just send a success response
    res.send('Form submitted successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
