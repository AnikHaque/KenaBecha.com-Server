const ProductModel = require("../models/product.model");

const createProductIntoDb = async (payload) => {
  const product = await ProductModel.create(payload);

  return product;
};

const findAllProductsFromDb = async () => {
  const products = await ProductModel.find()
    .populate("category")
    .populate("brand");
  return products;
};

const productServices = {
  createProductIntoDb,
  findAllProductsFromDb,
};

module.exports = productServices;
