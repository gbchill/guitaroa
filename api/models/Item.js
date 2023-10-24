// Import Mongoose to work with MongoDB
const mongoose = require('mongoose');

// Define the schema for items in your database
const itemSchema = new mongoose.Schema({
    // The owner of the item, a reference to the 'User' model
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // The title of the item
    title: String,
    // The address of the item
    address: String,
    // An array of photo URLs for the item
    photos: [String],
    // A description of the item
    description: String,
    // Specifications of the item
    specs: [String],
    // Additional information about the item
    extraInfo: String,
});

// Create a model based on the defined schema and name it 'Item'
const ItemModel = mongoose.model('Item', itemSchema);

// Export the 'ItemModel' for use in other parts of your application
module.exports = ItemModel;