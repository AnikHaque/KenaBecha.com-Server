const express = require("express");
const fullstackControllers = require("../controllers/fullstackenrollment.controller");
const apiEndPoints = require("../utility/api-end-point-constants");

const fullstackRouter = express.Router();
const fullstackyEndPoints = apiEndPoints.fullstack;

fullstackRouter.post(
  fullstackyEndPoints.fullstack,
  fullstackControllers.createFullstack
);

fullstackRouter.get(
  fullstackyEndPoints.allFullstacks,
  fullstackControllers.getAllFullstack
);

fullstackRouter.get(
  fullstackyEndPoints.singlefullstack,
  fullstackControllers.getFullstackByEmail
);

fullstackRouter.put(
  fullstackyEndPoints.updateEnrollment,
  fullstackControllers.updateFullstackEnrollment
);

module.exports = fullstackRouter;
