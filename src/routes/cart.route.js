const express = require("express");
const cartControllers = require("../controllers/cart.controller");
const apiEndPoints = require("../utility/api-end-point-constants");
const AuthVerificationMiddleware = require("../middlewares/AuthVerification");

const cartRouter = express.Router();
const cartEndPoints = apiEndPoints.cartlist;

cartRouter.post(
  cartEndPoints.savecartlist,
  AuthVerificationMiddleware,
  cartControllers.SaveCartList
);

cartRouter.patch(cartEndPoints.updatecartlist, cartControllers.UpdateCartList);

cartRouter.delete(cartEndPoints.removecartlist, cartControllers.RemoveCartList);

cartRouter.get(
  cartEndPoints.showcartlist,
  AuthVerificationMiddleware,
  cartControllers.CartList
);

module.exports = cartRouter;
