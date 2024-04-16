const categoryServices = require("../services/category.service");

const createCategory = async (req, res) => {
  const categoryData = req.body;
  try {
    const resp = await categoryServices.createCategoryIntoDb(categoryData);

    // Use sendResponse function to send the response
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Category create successfully",
      data: resp,
    });
  } catch (error) {
    // Handle errors appropriately
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: "Internal Server Error",
      data: null,
    });
  }
};

module.exports = {
  createCategory,
};
