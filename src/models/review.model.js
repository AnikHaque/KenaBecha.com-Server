const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    email: { type: String },
    des: { type: String, required: true },
    rating: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const ReviewModel = mongoose.model("reviews", DataSchema);
module.exports = ReviewModel;
