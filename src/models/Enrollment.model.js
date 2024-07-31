const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const enrollmentSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    address: String,
    phone: String,
    transaction_id: { type: String, unique: true },
    status: { type: String, default: "pending" }, // Add the status field if needed
  },
  { timestamps: true }
); // Include timestamps to track creation and update times

const enrollmentModel = model("enrollments", enrollmentSchema);

module.exports = enrollmentModel;
