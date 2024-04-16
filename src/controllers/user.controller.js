const userServices = require("../services/user.service");

const createUser = async (req, res) => {
  const userData = req.body;
  userData.role = "executive";
  try {
    const resp = await userServices.createUserIntoDb(userData);

    // Use sendResponse function to send the response
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "User created successfully",
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
  createUser,
};
