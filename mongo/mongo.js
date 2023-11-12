// Import the mongoose library
const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/navneet')
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });

// Define a schema for the 'nav' collection
const navSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

// Create a model for the 'nav' collection using the schema
const Nav = mongoose.model('nav', navSchema);

// Export the model for use in other parts of your application (if needed)
module.exports = Nav;
