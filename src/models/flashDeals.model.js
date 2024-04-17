const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    offPercentage: { type: String },
  },
  { timestamps: true, versionKey: false }
);
const FlashDealModel = mongoose.model("flashdeals", DataSchema);
module.exports = FlashDealModel;
