const { Schema, model } = require("mongoose");

const suscriptionSchema = new Schema({
  duration_months: { type: Number, required: true, default: 12 },
  size: { type: Number, required: true, default: 5 },
  upfrontPayment: { type: Boolean, required: true, default: false },
  });
  
  const Suscription = model("Suscription", suscriptionSchema);
  
  module.exports = Suscription;