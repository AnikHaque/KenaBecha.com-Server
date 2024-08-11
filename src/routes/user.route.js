const express = require("express");
const userControllers = require("../controllers/user.controller");
const apiEndPoints = require("../utility/api-end-point-constants");
const AuthVerificationMiddleware = require("../middlewares/AuthVerification");

const userRouter = express.Router();
const userEndPoints = apiEndPoints.user;

userRouter.post(userEndPoints.user, userControllers.userRegistration);
userRouter.get(userEndPoints.getUsers, userControllers.getAllUsers);
userRouter.post(
  userEndPoints.verify,
  userControllers.verifyOTPAndCreateAccount
);
userRouter.post(userEndPoints.login, userControllers.userLogin);
userRouter.post(userEndPoints.logout, userControllers.userLogout);

userRouter.post(
  userEndPoints.changePassword,
  userControllers.userChangePassword
);

userRouter.post(
  userEndPoints.createProfile,
  AuthVerificationMiddleware,
  userControllers.CreateProfile
);

module.exports = userRouter;
