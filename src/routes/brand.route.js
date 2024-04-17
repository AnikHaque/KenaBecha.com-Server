const express = require("express");
const brandControllers = require("../controllers/brand.controller");
const apiEndPoints = require("../utility/api-end-point-constants");

const brandRouter = express.Router();
const brandEndPoints = apiEndPoints.brand;

brandRouter.post(brandEndPoints.brand, brandControllers.createBrand);
brandRouter.get(brandEndPoints.allBrands, brandControllers.getAllBrands);

module.exports = brandRouter;
