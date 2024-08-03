const ReviewModel = require("../models/review.model");
const reviewServices = require("../services/review.service");
const sendResponse = require("../utility/sendResponse");

const createReview = async (req, res) => {
  const reviewData = req.body;

  const resp = await reviewServices.createReviewIntoDb(reviewData);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Review created successfully",
    data: resp,
  });
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await reviewServices.getAllReviewsFromDb();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "  Reviews retrieved successfully",
      data: reviews,
    });
  } catch (err) {
    sendResponse(res, {
      statusCode: err.statusCode || 500,
      success: false,
      message: err.message || "Internal Server Error",
      data: null,
    });
  }
};

module.exports = {
  createReview,
  getAllReviews,
};
