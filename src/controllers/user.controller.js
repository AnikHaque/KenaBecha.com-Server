const {
  registerUserWithOTP,
  createUserAccount,
  loginUser,
  SaveProfileService,
} = require("../services/user.service");

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
    // Clear the token from cookies
    res.clearCookie("token");

    return res
      .status(200)
      .json({ status: "success", message: "User logged out successfully" });
  } catch (error) {
    console.error("Error during logout:", error);
    return res
      .status(500)
      .json({ status: "fail", message: "Error during logout" });
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
};
