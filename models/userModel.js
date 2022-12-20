const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  pass: {
    type: String,
    select: false,
  },
  email: {
    type: String,
  },

});

module.exports = mongoose.model("User", userSchema); 