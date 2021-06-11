// === Should have read better the instructions and seen that there was no need to make routes, schemas, and all this backed related structure ===

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  }
});

const User = model("User", userSchema);

module.exports = User;
