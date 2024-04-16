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
      statusCode: err.statusCode || 500, // Use error statusCode if available, otherwise default to 500
      success: false,
      message: err.message || "Internal Server Error", // Use error message if available, otherwise default to "Internal Server Error"
      data: null,
    });
  }
};

module.exports = {
  createCategory,
};
