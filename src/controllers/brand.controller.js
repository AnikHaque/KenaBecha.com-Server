const brandServices = require("../services/brand.service");
const sendResponse = require("../utility/sendResponse"); // Import sendResponse without destructuring

const createBrand = async (req, res) => {
  const brandData = req.body;

  try {
    const resp = await brandServices.createBrandIntoDb(brandData);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Brand create successfully",
      data: resp,
    });
  } catch (error) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: "Internal Server Error",
      data: null,
    });
  }
};

const getAllBrands = async (req, res) => {
  try {
    const Brands = await brandServices.getAllBrandsFromDb();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Brands retrieved successfully",
      data: Brands,
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
  createBrand,
  getAllBrands,
};
