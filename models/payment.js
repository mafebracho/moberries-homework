// === Should have read better the instructions and seen that there was no need to make routes, schemas, and all this backed related structure ===

const { Schema, model } = require("mongoose");

const paymentSchema = new Schema({
  card_number: { 
      type: String, 
      required: true 
    },
  expiration_date: { 
      type: Date, 
      required: true 
    },
  security_code: { 
      type: String, 
      required: true 
    },
    tos_confirmed: {
      type: Boolean,
      default: false,
      required: true
    }
});

const Payment = model("Payment", paymentSchema);

module.exports = Payment;
