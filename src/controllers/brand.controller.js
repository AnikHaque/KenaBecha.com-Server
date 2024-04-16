const brandServices = require("../services/brand.service");
const sendResponse = require("../utility/sendResponse"); // Import sendResponse without destructuring

const createBrand = async (req, res) => {
  const brandData = req.body;

  try {
    const resp = await brandServices.createBrandIntoDb(brandData);

    // Use sendResponse function to send the response
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Brand create successfully",
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
  createBrand,
};
