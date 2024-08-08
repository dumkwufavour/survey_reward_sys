// authentication-service.js
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'your_secret_key';

app.post('/login', (req, res) => {
  // Authenticate user
  const user = {
    // user data
  };
  
  // Generate JWT token
  const token = jwt.sign(user, secretKey);
  
  res.json({ token });
});

app.listen(process.env.port, () => {
  console.log('Authentication Service running on port');
});
