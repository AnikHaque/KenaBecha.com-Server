const BlogModel = require("../models/blog.model");

const createBlogIntoDb = async (payload) => {
  const resp = await BlogModel.create(payload);
  return resp;
};

const getAllBlogsFromDb = async () => {
  let data = await BlogModel.find();
  return data;
};

const blogServices = {
  createBlogIntoDb,
  getAllBlogsFromDb,
};

module.exports = blogServices;
