const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    designation: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const ReviewModel = mongoose.model("reviews", DataSchema);
module.exports = ReviewModel;
