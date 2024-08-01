const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    categoryName: { type: String, unique: true, required: true },
  },
  { timestamps: true, versionKey: false }
);
const BlogCategoryModel = mongoose.model("blogcategories", DataSchema);
module.exports = BlogCategoryModel;
