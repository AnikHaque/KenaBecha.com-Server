const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    shortDes: { type: String, required: true },
    authorname: { type: String, required: true },
    authorimage: { type: String, required: true },
    image: { type: String, required: true },
    time: { type: String, required: true },
    blogcategoryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blogcategories",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
const blogModel = mongoose.model("blogs", DataSchema);
module.exports = blogModel;
