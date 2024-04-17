const express = require("express");
const authControllers = require("../controllers/auth.controller");
const apiEndPoints = require("../utility/api-end-point-constants");

const authRouter = express.Router();
const authEndPoints = apiEndPoints.auth;

authRouter.post(authEndPoints.login, authControllers.signInController);

module.exports = authRouter;
