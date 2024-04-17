const BrandModel = require("../models/brand.model");

const createBrandIntoDb = async (payload) => {
  const resp = await BrandModel.create(payload);
  return resp;
};

const getAllBrandsFromDb = async () => {
  let data = await BrandModel.find();
  return data;
};

const brandServices = {
  createBrandIntoDb,
  getAllBrandsFromDb,
};

module.exports = brandServices;
