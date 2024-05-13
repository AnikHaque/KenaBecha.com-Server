const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String },
  role: { type: String, default: "customer" },
  address: String,
  phone: String,
  age: Number,
  authToken: String,
  otp: String,
});

const userModel = model("users", userSchema);

module.exports = userModel;
