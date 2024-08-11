const mongoose = require("mongoose");
const fullstackenrollmentModel = require("../models/fullstackenrollment.model");

const createfullstackIntoDb = async (payload) => {
  const resp = await fullstackenrollmentModel.create(payload);
  return resp;
};

const getAllfullstackFromDb = async () => {
  const data = await fullstackenrollmentModel.find();
  return data;
};

const getFullstackEnrollmentsByEmail = async (email) => {
  const data = await fullstackenrollmentModel.find({ email: email });
  return data;
};

// Update enrollment by ID
const updatefullstackInDb = async (fullstackId, payload) => {
  if (!mongoose.Types.ObjectId.isValid(fullstackId)) {
    throw new Error("Invalid enrollment ID");
  }

  const updatedEnrollment = await fullstackenrollmentModel.findByIdAndUpdate(
    fullstackId,
    payload,
    {
      new: true, // Return the updated document
      runValidators: true, // Validate the update operation
    }
  );

  return updatedEnrollment;
};

// Delete enrollment by ID
const deleteEnrollmentFromDb = async (fullstackId) => {
  if (!ObjectId.isValid(fullstackId)) {
    throw new Error("Invalid course ID");
  }

  const deletedFullstack = await fullstackenrollmentModel.findByIdAndDelete(
    fullstackId
  );

  return deletedFullstack;
};

const fullstackServices = {
  createfullstackIntoDb,
  getAllfullstackFromDb,
  getFullstackEnrollmentsByEmail,
  updatefullstackInDb,
  deleteEnrollmentFromDb,
};

module.exports = fullstackServices;
