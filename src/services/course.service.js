const mongoose = require("mongoose");
const CourseModel = require("../models/course.model");

const ObjectId = mongoose.Types.ObjectId;

// create course
const createCourseIntoDb = async (payload) => {
  const course = await CourseModel.create(payload);

  return course;
};

// find all courses
const findAllCoursesFromDb = async () => {
  const courses = await CourseModel.find().populate("categoryID");
  return courses;
};

const courseServices = {
  createCourseIntoDb,
  findAllCoursesFromDb,
};

module.exports = courseServices;
