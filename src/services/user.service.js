const userModel = require("../models/user.model");
const { EncodeToken } = require("../utility/TokenHelper");
const { UserOTPService } = require("./auth.service");
const bcrypt = require("bcrypt");

const registerUserWithOTP = async (userData) => {
  try {
    // Generate OTP and send it to the user's email
    const otpResult = await UserOTPService(userData.email);
    console.log(otpResult);
    if (otpResult.status !== "success") {
      return { status: "fail", message: "Failed to send OTP" };
    }

    // Store user data and OTP in the database
    const newUser = new userModel({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      address: userData.address,
      otp: otpResult.otp,
      role: "customer", // Store the OTP for verification later
    });
    await newUser.save();

    return {
      status: "success",
      message: "OTP sent successfully. Please verify your email with the OTP.",
    };
  } catch (error) {
    console.error("Error during user registration:", error);
    return { status: "fail", message: "Error during user registration" };
  }
};

const createUserAccount = async (userTempData) => {
  try {
    // Check if a user with the provided email already exists
    const existingUser = await userModel.findOne({ email: userTempData.email });

    // If a user with the provided email exists, update their information
    if (existingUser) {
      await userModel.updateOne(
        { email: userTempData.email },
        { $set: { otp: "0", password: userTempData.password } }
      );
      return { status: "success", message: "User updated successfully" };
    }

    // If no user with the provided email exists, create a new user
    const newUser = new userModel({
      name: userTempData.name,
      email: userTempData.email,
      password: userTempData.password,
      role: userTempData.role || "customer",
      address: userTempData.address,
      // Other fields...
    });
    await newUser.save();

    return { status: "success", message: "User registered successfully" };
  } catch (error) {
    console.error("Error creating/updating user account:", error);
    return { status: "fail", message: "Error creating/updating user account" };
  }
};

const loginUser = async (email, password) => {
  try {
    // Find user by email
    const user = await userModel.findOne({ email });

    if (!user) {
      return { status: "fail", message: "User not found" };
    }

    // Check if password matches
    if (password !== user.password) {
      return { status: "fail", message: "Incorrect password" };
    }

    // Password matched, generate JWT token
    const token = EncodeToken(email, user._id.toString());

    return { status: "success", message: "Login successful", token };
  } catch (error) {
    console.error("Error during login:", error);
    return { status: "fail", message: "Error during login" };
  }
};

module.exports = {
  registerUserWithOTP,
  createUserAccount,
  loginUser,
};
