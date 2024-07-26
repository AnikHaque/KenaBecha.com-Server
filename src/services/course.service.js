const mongoose = require("mongoose");
const CourseModel = require("../models/course.model");

const ObjectId = mongoose.Types.ObjectId;

const createCourseIntoDb = async (payload) => {
  const course = await CourseModel.create(payload);

  return course;
};

const courseServices = {
  createCourseIntoDb,
};

module.exports = courseServices;
