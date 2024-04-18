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

module.exports = {
  createReview,
};
