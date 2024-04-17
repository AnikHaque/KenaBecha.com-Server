const express = require("express");
const flashDealsControllers = require("../controllers/flasDeals.controller");
const apiEndPoints = require("../utility/api-end-point-constants");

const flashDealsRouter = express.Router();
const flashDealsEndPoints = apiEndPoints.flashdeals;

flashDealsRouter.post(
  flashDealsEndPoints.flashdeals,
  flashDealsControllers.createFlashDeals
);

module.exports = flashDealsRouter;
