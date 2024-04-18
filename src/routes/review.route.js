const express = require("express");
const reviewControllers = require("../controllers/review.controller");
const apiEndPoints = require("../utility/api-end-point-constants");

const reviewRouter = express.Router();
const reviewEndPoints = apiEndPoints.review;

reviewRouter.post(reviewEndPoints.review, reviewControllers.createReview);

module.exports = reviewRouter;
