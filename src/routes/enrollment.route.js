const express = require("express");
const enrollmentControllers = require("../controllers/enrollment.controller");
const apiEndPoints = require("../utility/api-end-point-constants");

const enrollmentRouter = express.Router();
const enrollmentEndPoints = apiEndPoints.enrollment;

enrollmentRouter.post(
  enrollmentEndPoints.enrollment,
  enrollmentControllers.createEnrollment
);

enrollmentRouter.get(
  enrollmentEndPoints.allEnrollments,
  enrollmentControllers.getAllEnrollments
);

enrollmentRouter.get(
  enrollmentEndPoints.singleEnrollment,
  enrollmentControllers.getUserEnrollments
);

// enrollmentRouter.get(
//   enrollmentEndPoints.allCategories,
//   categoryControllers.getAllCategory
// );

module.exports = enrollmentRouter;
