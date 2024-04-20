const express = require("express");
const wishControllers = require("../controllers/wishList.controller");
const apiEndPoints = require("../utility/api-end-point-constants");
const AuthVerificationMiddleware = require("../middlewares/AuthVerification");

const wishRouter = express.Router();
const wishEndPoints = apiEndPoints.wishlist;

wishRouter.post(
  wishEndPoints.savewishlist,
  AuthVerificationMiddleware,
  wishControllers.SaveWishList
);

wishRouter.delete(
  wishEndPoints.removewishlist,
  AuthVerificationMiddleware,
  wishControllers.RemoveWishList
);

module.exports = wishRouter;
