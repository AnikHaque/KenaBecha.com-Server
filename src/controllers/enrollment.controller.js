const enrollmentService = require("../services/enrollment.service");
const sendResponse = require("../utility/sendResponse");

// create enrollment
const createEnrollment = async (req, res) => {
  const enrollmentData = req.body;

  try {
    const resp = await enrollmentService.createEnrollmentIntoDb(enrollmentData);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Enrollment created successfully",
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

// get all enrollments
const getAllEnrollments = async (req, res) => {
  try {
    // Call the service function to fetch all products with populated category and brand details
    const enrollments = await enrollmentService.findAllEnrollmentsFromDb();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Enrollments retrieved successfully",
      data: enrollments,
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

// const getMyEnrollments = async (req, res) => {
//   try {
//     const userId = req.user._id;
//     const enrollments = await enrollmentService.getEnrollmentsByUser(userId);
//     res.status(200).json({ success: true, enrollments });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// const updateEnrollmentStatus = async (req, res) => {
//   try {
//     const { enrollmentId, status } = req.body;
//     const enrollment = await enrollmentService.updateEnrollmentStatus(
//       enrollmentId,
//       status
//     );
//     if (!enrollment) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Enrollment not found" });
//     }
//     res.status(200).json({ success: true, enrollment });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };
// Delete course
const deletedEnrollment = async (req, res) => {
  const enrollmentId = req.params.id;

  try {
    const deletedEnrollments = await enrollmentService.deleteEnrollmentFromDb(
      enrollmentId
    );

    if (!deletedEnrollments) {
      sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "enrollment not found",
        data: null,
      });
      return;
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "enrollment deleted successfully",
      data: deletedCourse,
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
  deletedEnrollment,
};
