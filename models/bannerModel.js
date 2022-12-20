const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model("Banner", BannerSchema); 