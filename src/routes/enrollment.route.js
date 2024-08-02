const express = require("express");
const enrollmentControllers = require("../controllers/enrollment.controller");
const apiEndPoints = require("../utility/api-end-point-constants");
const AuthVerification = require("../middlewares/AuthVerification");

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
  enrollmentEndPoints.allEnrollments,
  enrollmentControllers.getAllEnrollments
);

enrollmentRouter.delete(
  enrollmentEndPoints.deleteEnrollment,
  enrollmentControllers.deletedEnrollment
);

// enrollmentRouter.get(
//   enrollmentEndPoints.singleEnrollment,
//   enrollmentControllers.getMyEnrollments
// );

// enrollmentRouter.get(
//   enrollmentEndPoints.allCategories,
//   categoryControllers.getAllCategory
// );

module.exports = enrollmentRouter;
