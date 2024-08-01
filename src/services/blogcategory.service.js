const BlogCategoryModel = require("../models/blogcategory.model");

const createBlogCategoryIntoDb = async (payload) => {
  const resp = await BlogCategoryModel.create(payload);
  return resp;
};

const getAllBlogCategoryFromDb = async () => {
  let data = await BlogCategoryModel.find();
  return data;
};

const blogcategoryServices = {
  createBlogCategoryIntoDb,
  getAllBlogCategoryFromDb,
};

module.exports = blogcategoryServices;
