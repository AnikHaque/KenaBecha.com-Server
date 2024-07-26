const express = require("express");
const courseControllers = require("../controllers/course.controller");
const apiEndPoints = require("../utility/api-end-point-constants");
const AuthVerificationMiddleware = require("../middlewares/AuthVerification");

const courseRouter = express.Router();
const courseEndPoints = apiEndPoints.course;

courseRouter.post(courseEndPoints.course, courseControllers.createCourse);
courseRouter.get(courseEndPoints.allCourses, courseControllers.getAllCourses);

module.exports = courseRouter;
