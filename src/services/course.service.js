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

// Update course by ID
const updateCourseInDb = async (courseId, payload) => {
  if (!ObjectId.isValid(courseId)) {
    throw new Error("Invalid course ID");
  }

  const updatedCourse = await CourseModel.findByIdAndUpdate(courseId, payload, {
    new: true, // Return the updated document
    runValidators: true, // Validate the update operation
  });

  return updatedCourse;
};

// Delete course by ID
const deleteCourseFromDb = async (courseId) => {
  if (!ObjectId.isValid(courseId)) {
    throw new Error("Invalid course ID");
  }

  const deletedCourse = await CourseModel.findByIdAndDelete(courseId);

  return deletedCourse;
};

const courseServices = {
  createCourseIntoDb,
  findAllCoursesFromDb,
  updateCourseInDb,
  deleteCourseFromDb,
};

module.exports = courseServices;
