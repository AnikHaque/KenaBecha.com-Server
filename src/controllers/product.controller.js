const productServices = require("../services/product.service");
const sendResponse = require("../utility/sendResponse");

const createProduct = async (req, res) => {
  const productData = req.body;

  try {
    const resp = await productServices.createProductIntoDb(productData);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "product created successfully",
      data: resp,
    });
  } catch (err) {
    // Handle errors here
    sendResponse(res, {
      statusCode: err.statusCode || 500,
      success: false,
      message: err.message || "Internal Server Error",
      data: null,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    // Call the service function to fetch all products with populated category and brand details
    const products = await productServices.findAllProductsFromDb();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "products retrieved successfully",
      data: products,
    });
  } catch (err) {
    // Handle errors here
    sendResponse(res, {
      statusCode: err.statusCode || 500,
      success: false,
      message: err.message || "Internal Server Error",
      data: null,
    });
  }
};

const getProductsByBrand = async (req, res) => {
  try {
    // Call the service function to fetch all products with populated category and brand details
    const productByBrand = await productServices.ListByBrandService(req);

    sendResponse(res, {
      statusCode: 200, // Assuming 200 is the correct status for a successful response
      success: true,
      message: "Products by brand retrieved successfully",
      data: productByBrand, // Sending only the data field
    });
  } catch (err) {
    // Handle errors here
    sendResponse(res, {
      statusCode: err.statusCode || 500,
      success: false,
      message: err.message || "Internal Server Error",
      data: null,
    });
  }
};

const getProductsByCategory = async (req, res) => {
  // Call the service function to fetch all products with populated category and brand details
  const productByCategory = await productServices.ListByCategoryService(req);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Products by category retrieved successfully",
    data: productByCategory,
  });
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductsByBrand,
  getProductsByCategory,
};
