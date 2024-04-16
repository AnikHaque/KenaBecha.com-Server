const CategoryModel = require("../models/category.model");

const createCategoryIntoDb = async (payload) => {
  const resp = await CategoryModel.create(payload);
  return resp;
};

const categoryServices = {
  createCategoryIntoDb,
};

module.exports = categoryServices;
