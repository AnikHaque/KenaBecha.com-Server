const mongoose = require("mongoose");

// create enrollment
const createEnrollmentIntoDb = async (payload) => {
  const enrollment = await enrollmentModel(payload);

  return enrollment;
};

// find all enrollments
const findAllEnrollmentsFromDb = async () => {
  const enrollments = await enrollmentModel.find();
  return enrollments;
};

// // Update course by ID
// const updateCourseInDb = async (courseId, payload) => {
//   if (!ObjectId.isValid(courseId)) {
//     throw new Error("Invalid course ID");
//   }

//   const updatedCourse = await CourseModel.findByIdAndUpdate(courseId, payload, {
//     new: true, // Return the updated document
//     runValidators: true, // Validate the update operation
//   });

//   return updatedCourse;
// };

// Delete enrollment by ID
const deleteEnrollmentFromDb = async (enrollmentId) => {
  if (!ObjectId.isValid(enrollmentId)) {
    throw new Error("Invalid enrollment ID");
  }

  const deletedEnrollment = await enrollmentModel.findByIdAndDelete(
    enrollmentId
  );

  return deletedEnrollment;
};

const enrollmentServices = {
  createEnrollmentIntoDb,
  findAllEnrollmentsFromDb,
  deleteEnrollmentFromDb,
};

module.exports = enrollmentServices;
