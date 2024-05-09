const express = require("express");
const productControllers = require("../controllers/product.controller");
const apiEndPoints = require("../utility/api-end-point-constants");
const AuthVerificationMiddleware = require("../middlewares/AuthVerification");

const productRouter = express.Router();
const productEndPoints = apiEndPoints.product;

productRouter.post(productEndPoints.product, productControllers.createProduct);
productRouter.post(
  productEndPoints.productFilter,
  productControllers.ProductFilter
);

productRouter.post(
  productEndPoints.review,
  AuthVerificationMiddleware,
  productControllers.productReview
);

productRouter.get(
  productEndPoints.allProducts,
  productControllers.getAllProducts
);

productRouter.get(
  productEndPoints.details,
  productControllers.getProductsDetails
);

productRouter.get(
  productEndPoints.byBrands,
  productControllers.getProductsByBrand
);

productRouter.get(
  productEndPoints.byCategory,
  productControllers.getProductsByCategory
);

productRouter.get(
  productEndPoints.byRemark,
  productControllers.getProductsByRemark
);

productRouter.get(
  productEndPoints.details,
  productControllers.getProductsDetails
);

productRouter.get(
  productEndPoints.showReview,
  productControllers.ProductReviewList
);

module.exports = productRouter;
