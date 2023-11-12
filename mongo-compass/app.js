const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/ninja', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

const db = mongoose.connection;

// Check the connection status
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
