const fullstackServices = require("../services/fullstack.service");
const sendResponse = require("../utility/sendResponse");

const createFullstack = async (req, res) => {
  const fullstackData = req.body;

  try {
    const resp = await fullstackServices.createfullstackIntoDb(fullstackData);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Fullstack enrollment created successfully",
      data: resp,
    });
  } catch (err) {
    // Handle errors here
    sendResponse(res, {
      statusCode: err.statusCode || 500,
      success: false,
      message: err.message || "Internal Server Error",
      data: null,
    });
  }
};

const getAllFullstack = async (req, res) => {
  try {
    const fullstack = await fullstackServices.getAllfullstackFromDb();

    sendResponse(res, {
      statusCode: 200, // Changed from 201 to 200 for a successful retrieval
      success: true,
      message: "Fullstack enrollments retrieved successfully",
      data: fullstack,
    });
  } catch (err) {
    sendResponse(res, {
      statusCode: err.statusCode || 500,
      success: false,
      message: err.message || "Internal Server Error",
      data: null,
    });
  }
};

const getFullstackByEmail = async (req, res) => {
  const { email } = req.params;

  try {
    const enrollments = await fullstackServices.getFullstackEnrollmentsByEmail(
      email
    );

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Fullstack enrollment retrieved successfully",
      data: enrollments,
    });
  } catch (err) {
    sendResponse(res, {
      statusCode: err.statusCode || 500,
      success: false,
      message: err.message || "Internal Server Error",
      data: null,
    });
  }
};

const updateFullstackEnrollment = async (req, res) => {
  const fullstackId = req.params.id;
  const updateData = req.body;

  try {
    const updatedEnrollment = await fullstackServices.updatefullstackInDb(
      fullstackId,
      updateData
    );

    if (!updatedEnrollment) {
      sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Enrollment not found",
        data: null,
      });
      return;
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Enrollment updated successfully",
      data: updatedEnrollment,
    });
  } catch (err) {
    sendResponse(res, {
      statusCode: err.statusCode || 500,
      success: false,
      message: err.message || "Internal Server Error",
      data: null,
    });
  }
};

// Delete enrollment
const deleteEnrollment = async (req, res) => {
  const fullstackId = req.params.id;

  try {
    const deletedEnrollment = await fullstackServices.deleteEnrollmentFromDb(
      fullstackId
    );

    if (!deletedEnrollment) {
      sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Enrollment not found",
        data: null,
      });
      return;
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Enrollment deleted successfully",
      data: deletedEnrollment,
    });
  } catch (err) {
    sendResponse(res, {
      statusCode: err.statusCode || 500,
      success: false,
      message: err.message || "Internal Server Error",
      data: null,
    });
  }
};

module.exports = {
  createFullstack,
  getAllFullstack,
  getFullstackByEmail,
  updateFullstackEnrollment,
  deleteEnrollment,
};
