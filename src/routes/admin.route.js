const express = require("express");
const adminControllers = require("../controllers/admin.controller");
const apiEndPoints = require("../utility/api-end-point-constants");
const AuthVerificationMiddleware = require("../middlewares/AuthVerification");

const adminRouter = express.Router();
const adminEndPoints = apiEndPoints.admin;

adminRouter.post(adminEndPoints.admin, adminControllers.adminRegistration);
adminRouter.post(
  adminEndPoints.verifyAdmin,
  adminControllers.verifyOTPAndCreateAdminAccount
);
adminRouter.post(adminEndPoints.loginAdmin, adminControllers.adminLogin);
adminRouter.post(
  adminEndPoints.logoutAdmin,
  AuthVerificationMiddleware,
  adminControllers.adminLogout
);

module.exports = adminRouter;
