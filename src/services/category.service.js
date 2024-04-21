const CategoryModel = require("../models/category.model");

const createCategoryIntoDb = async (payload) => {
  const resp = await CategoryModel.create(payload);
  return resp;
};

const getAllCategoryFromDb = async () => {
  let data = await CategoryModel.find();
  return data;
};

const categoryServices = {
  createCategoryIntoDb,
  getAllCategoryFromDb,
};

module.exports = categoryServices;
