const flashDealsServices = require("../services/flashDeals.service");
const sendResponse = require("../utility/sendResponse"); // Import sendResponse without destructuring

const createFlashDeals = async (req, res) => {
  const flashDealsData = req.body;

  try {
    const resp = await flashDealsServices.createFlashDealIntoDb(flashDealsData);

    // Use sendResponse function to send the response
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "FlashDeals create successfully",
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
  createFlashDeals,
};
