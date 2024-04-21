const categoryServices = require("../services/category.service");
const sendResponse = require("../utility/sendResponse");

const createCategory = async (req, res) => {
  const categoryData = req.body;

  try {
    const resp = await categoryServices.createCategoryIntoDb(categoryData);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Category created successfully",
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

const getAllCategory = async (req, res) => {
  try {
    const Categories = await categoryServices.getAllCategoryFromDb();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Categories retrieved successfully",
      data: Categories,
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
  createCategory,
  getAllCategory,
};
