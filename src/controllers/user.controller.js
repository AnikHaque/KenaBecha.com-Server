const {
  registerUserWithOTP,
  createUserAccount,
  loginUser,
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

    // Login successful, send token in response
    return res.status(200).json(loginResult);
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(500)
      .json({ status: "fail", message: "Error during login" });
  }
};

module.exports = { userRegistration, verifyOTPAndCreateAccount, userLogin };
