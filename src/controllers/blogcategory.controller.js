const blogcategoryServices = require("../services/blogcategory.service");
const sendResponse = require("../utility/sendResponse");

const createBlogCategory = async (req, res) => {
  const blogcategoryData = req.body;

  try {
    const resp = await blogcategoryServices.createBlogCategoryIntoDb(
      blogcategoryData
    );

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Blog Category created successfully",
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

const getAllblogCategory = async (req, res) => {
  try {
    const blogCategories =
      await blogcategoryServices.getAllBlogCategoryFromDb();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Blog Categories retrieved successfully",
      data: blogCategories,
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
  createBlogCategory,
  getAllblogCategory,
};
