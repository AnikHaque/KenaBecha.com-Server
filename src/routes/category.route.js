const express = require("express");
const categoryControllers = require("../controllers/category.controller");
const apiEndPoints = require("../utility/api-end-point-constants");

const categoryRouter = express.Router();
const categoryEndPoints = apiEndPoints.category;

categoryRouter.post(
  categoryEndPoints.category,
  categoryControllers.createCategory
);

categoryRouter.get(
  categoryEndPoints.allCategories,
  categoryControllers.getAllCategory
);

module.exports = categoryRouter;
