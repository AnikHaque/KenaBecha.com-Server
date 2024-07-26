const courseServices = require("../services/course.service");
const sendResponse = require("../utility/sendResponse");

const createCourse = async (req, res) => {
  const coursetData = req.body;

  try {
    const resp = await courseServices.createCourseIntoDb(coursetData);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Course created successfully",
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

module.exports = {
  createCourse,
};
