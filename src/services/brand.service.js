const BrandModel = require("../models/brand.model");

const createBrandIntoDb = async (payload) => {
  const resp = await BrandModel.create(payload);
  return resp;
};

const brandServices = {
  createBrandIntoDb,
};

module.exports = brandServices;
