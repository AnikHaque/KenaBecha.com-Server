const express = require("express");
const instructorControllers = require("../controllers/instructor.controller");
const apiEndPoints = require("../utility/api-end-point-constants");
const AuthVerificationMiddleware = require("../middlewares/AuthVerification");

const instructorRouter = express.Router();
const instructorEndPoints = apiEndPoints.instructor;

instructorRouter.post(
  instructorEndPoints.instructor,
  instructorControllers.instructorRegistration
);
instructorRouter.post(
  instructorEndPoints.verifyInstructor,
  instructorControllers.verifyOTPAndCreateInstructorAccount
);
instructorRouter.post(
  instructorEndPoints.loginInstructor,
  instructorControllers.instructorLogin
);
instructorRouter.post(
  instructorEndPoints.logoutInstructor,
  AuthVerificationMiddleware,
  instructorControllers.instructorLogout
);

module.exports = instructorRouter;
