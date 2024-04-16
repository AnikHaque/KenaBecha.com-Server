const userModel = require("../models/user.model");

const createUserIntoDb = async (payload) => {
  const resp = await userModel.create(payload);
  return resp;
};

const userServices = {
  createUserIntoDb,
};

module.exports = userServices;
