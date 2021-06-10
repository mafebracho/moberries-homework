const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  tos_confirmed: {
    type: Boolean,
    default: false,
    required: true
  }
});

const User = model("User", userSchema);

module.exports = User;
