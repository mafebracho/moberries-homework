// === Should have read better the instructions and seen that there was no need to make routes, schemas, and all this backed related structure ===

const { Schema, model } = require("mongoose");

const suscriptionSchema = new Schema({
  duration_months: { 
    type: Number, 
    required: true, 
    default: 12 
  },
  size_gb: { 
    type: Number, 
    required: true, 
    default: 5 
  },
  upfront_payment: { 
    type: Boolean, 
    required: true, 
    default: false 
  },
  });
  
  const Suscription = model("Suscription", suscriptionSchema);
  
  module.exports = Suscription;