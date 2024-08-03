const express = require("express");
const reviewControllers = require("../controllers/review.controller");
const apiEndPoints = require("../utility/api-end-point-constants");
const AuthVerificationMiddleware = require("../middlewares/AuthVerification");

const reviewRouter = express.Router();
const reviewEndPoints = apiEndPoints.review;

reviewRouter.post(reviewEndPoints.review, reviewControllers.createReview);
reviewRouter.get(reviewEndPoints.allReviews, reviewControllers.getAllReviews);

module.exports = reviewRouter;
