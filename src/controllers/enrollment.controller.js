const enrollmentServices = require("../services/enrollment.service");
const sendResponse = require("../utility/sendResponse");

const createEnrollment = async (req, res) => {
  const enrollmentData = req.body;

  try {
    const resp = await enrollmentServices.createEnrollmentIntoDb(
      enrollmentData
    );

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Enrollment created successfully",
      data: resp,
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

const getAllEnrollments = async (req, res) => {
  try {
    const data = await enrollmentServices.getAllEnrollmentFromDb();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "All enrollments retrieved successfully",
      data: data,
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

const getUserEnrollments = async (req, res) => {
  const { userId } = req.params;

  try {
    const data = await enrollmentServices.getUserEnrollmentsFromDb(userId);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User enrollments retrieved successfully",
      data: data,
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
  createEnrollment,
  getAllEnrollments,
  getUserEnrollments,
};
