const fullstackenrollmentModel = require("../models/fullstackenrollment.model");

const createfullstackIntoDb = async (payload) => {
  const resp = await fullstackenrollmentModel.create(payload);
  return resp;
};

const getAllfullstackFromDb = async () => {
  let data = await fullstackenrollmentModel.find();
  return data;
};

const getFullstackEnrollmentsByEmail = async (email) => {
  let data = await fullstackenrollmentModel.find({ email: email });
  return data;
};

const fullstackServices = {
  createfullstackIntoDb,
  getAllfullstackFromDb,
  getFullstackEnrollmentsByEmail,
};

module.exports = fullstackServices;
