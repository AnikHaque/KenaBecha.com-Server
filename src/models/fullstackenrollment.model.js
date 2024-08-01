const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const fullstackenrollmentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    transactionId: { type: String, required: true },
    image: { type: String, required: true },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "clear"],
    },
  },
  { timestamps: true, versionKey: false }
); // Include timestamps to track creation and update times

const fullstackenrollmentModel = model(
  "fullstackenrollments",
  fullstackenrollmentSchema
);

module.exports = fullstackenrollmentModel;
