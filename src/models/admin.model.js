const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const adminSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "admin" },
  address: String,
  phone: String,
  age: Number,
  authToken: String,
  otp: String,
});

const adminModel = model("admins", adminSchema);

module.exports = adminModel;
