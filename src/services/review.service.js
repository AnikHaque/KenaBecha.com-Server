const ReviewModel = require("../models/review.model");

const createReviewIntoDb = async (payload) => {
  try {
    const resp = await ReviewModel.create(payload);
    return resp;
  } catch (err) {
    throw new Error(err);
  }
};

const reviewServices = {
  createReviewIntoDb,
};

module.exports = reviewServices;
