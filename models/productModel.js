const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model("Product", ProductSchema); 