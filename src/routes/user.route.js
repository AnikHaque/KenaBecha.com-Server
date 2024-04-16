const express = require("express");
const { userControllers } = require("../controllers/user.controller");
const apiEndPoints = require("../utility/api-end-point-constants");

const userRouter = express.Router();
const userEndPoints = apiEndPoints.user;

userRouter.post(userEndPoints.user, userControllers.createUser);

module.exports = userRouter;
