const enrollmentModel = require("../models/Enrollment.model");

const createEnrollmentIntoDb = async (payload) => {
  const resp = await enrollmentModel.create(payload);
  return resp;
};

const getAllEnrollmentFromDb = async () => {
  let data = await enrollmentModel.find();
  return data;
};

const enrollmentServices = {
  createEnrollmentIntoDb,
  getAllEnrollmentFromDb,
};

module.exports = enrollmentServices;
