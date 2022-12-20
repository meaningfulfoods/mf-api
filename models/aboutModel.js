const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  description: {
    type: String
  },
  address: {
    type: String
  },
  socialLinks: {
    type: String
  },
  footerEnd: {
    type: String
  },
});

module.exports = mongoose.model("About", aboutSchema); 