const {
  registerUserWithOTP,
  createUserAccount,
  getAllUserFromDb,
  loginUser,
  SaveProfileService,
  logoutUser,
} = require("../services/user.service");

const sendResponse = require("../utility/sendResponse");

const userRegistration = async (req, res) => {
  try {
    const userData = req.body;
    // Call the service function to register user with OTP
    const registerResult = await registerUserWithOTP(userData);
    if (registerResult.status !== "success") {
      return res.status(400).json(registerResult);
    }

    // If OTP sent successfully, return success message and temporary user data
    return res.status(200).json(registerResult);
  } catch (error) {
    console.error("Error during user registration:", error);
    return res
      .status(500)
      .json({ status: "fail", message: "Error during user registration" });
  }
};

const verifyOTPAndCreateAccount = async (req, res) => {
  try {
    const userTempData = req.body;
    // Call the service function to verify OTP and create user account
    const createAccountResult = await createUserAccount(userTempData);
    return res
      .status(createAccountResult.status === "success" ? 201 : 400)
      .json(createAccountResult);
  } catch (error) {
    console.error("Error verifying OTP and creating account:", error);
    return res.status(500).json({
      status: "fail",
      message: "Error verifying OTP and creating account",
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const Users = await getAllUserFromDb();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Users retrieved successfully",
      data: Users,
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

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginResult = await loginUser(email, password);

    if (loginResult.status !== "success") {
      return res.status(401).json(loginResult);
    }

    if (loginResult.status == "success") {
      //  cookie set
      let cookieOption = {
        expires: new Date(Date.now() + 24 * 6060 * 1000),
        httpOnly: false,
      };

      // Set Cookies With Response
      res.cookie("token", loginResult.token, cookieOption);
      return res.status(200).json(loginResult);
    }

    // Login successful, send token in response
    return res.status(200).json(loginResult);
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(500)
      .json({ status: "fail", message: "Error during login" });
  }
};

const userLogout = async (req, res) => {
  try {
    res.clearCookie("token");
    const logoutResult = logoutUser();
    return res.status(200).json(logoutResult);
  } catch (error) {
    console.error("Error during logout:", error);
    return res
      .status(500)
      .json({ status: "fail", message: "Error during logout" });
  }
};

const userChangePassword = async (req, res) => {
  try {
    const userId = req.user._id; // Assume the user ID is available in the request object
    const { currentPassword, newPassword } = req.body;
    const changePasswordResult = await changePassword(
      userId,
      currentPassword,
      newPassword
    );

    if (changePasswordResult.status !== "success") {
      return res.status(400).json(changePasswordResult);
    }

    return res.status(200).json(changePasswordResult);
  } catch (error) {
    console.error("Error during password change:", error);
    return res
      .status(500)
      .json({ status: "fail", message: "Error during password change" });
  }
};

const CreateProfile = async (req, res) => {
  let result = await SaveProfileService(req);
  return res.status(200).json(result);
};

const UpdateProfile = async (req, res) => {
  let result = await SaveProfileService(req);
  return res.status(200).json(result);
};

module.exports = {
  userRegistration,
  verifyOTPAndCreateAccount,
  userLogin,
  userLogout,
  CreateProfile,
  UpdateProfile,
  getAllUsers,
  userChangePassword,
};
