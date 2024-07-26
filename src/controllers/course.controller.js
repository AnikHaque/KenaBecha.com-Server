const courseServices = require("../services/course.service");
const sendResponse = require("../utility/sendResponse");

// create course
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

// get all courses
const getAllCourses = async (req, res) => {
  try {
    // Call the service function to fetch all products with populated category and brand details
    const courses = await courseServices.findAllCoursesFromDb();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Courses retrieved successfully",
      data: courses,
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
  getAllCourses,
};
