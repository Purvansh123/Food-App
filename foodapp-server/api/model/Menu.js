const mongoose = require("mongoose");

const { Schema } = mongoose;

// Create schema object for menu Items
const menuSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
  },
  recipe: String,
  image: String,
  category: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// creating a model

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
