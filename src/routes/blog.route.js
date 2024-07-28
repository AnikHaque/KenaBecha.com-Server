const express = require("express");
const blogControllers = require("../controllers/blog.controller");
const apiEndPoints = require("../utility/api-end-point-constants");

const blogRouter = express.Router();
const blogEndPoints = apiEndPoints.blog;

blogRouter.post(blogEndPoints.blog, blogControllers.createBlog);

blogRouter.get(blogEndPoints.allBlogs, blogControllers.getAllBlogs);

module.exports = blogRouter;
