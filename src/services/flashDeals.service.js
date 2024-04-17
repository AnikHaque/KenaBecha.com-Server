const FlashDealModel = require("../models/flashDeals.model");

const createFlashDealIntoDb = async (payload) => {
  const resp = await FlashDealModel.create(payload);
  return resp;
};

const flashDealsServices = {
  createFlashDealIntoDb,
};

module.exports = flashDealsServices;
