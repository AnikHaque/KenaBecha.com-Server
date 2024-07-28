const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    shortDes: { type: String, required: true },
    image: { type: String, required: true },
    authorName: { type: String, required: true },
    category: { type: String, required: true },
    time: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const BlogModel = mongoose.model("blogs", DataSchema);
module.exports = BlogModel;
