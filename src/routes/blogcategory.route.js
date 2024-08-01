const express = require("express");
const blogcategoryControllers = require("../controllers/blogcategory.controller");
const apiEndPoints = require("../utility/api-end-point-constants");

const blogcategoryRouter = express.Router();
const blogcategoryEndPoints = apiEndPoints.blogcategory;

blogcategoryRouter.post(
  blogcategoryEndPoints.blogcategory,
  blogcategoryControllers.createBlogCategory
);

blogcategoryRouter.get(
  blogcategoryEndPoints.allBlogCategories,
  blogcategoryControllers.getAllblogCategory
);

module.exports = blogcategoryRouter;
