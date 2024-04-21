const userModel = require("../models/user.model");
const ProfileModel = require("../models/profile.model");
const { EncodeToken } = require("../utility/TokenHelper");
const { UserOTPService, AdminOTPService } = require("./auth.service");
const bcrypt = require("bcrypt");
const adminModel = require("../models/admin.model");

const registerAdminWithOTP = async (userData) => {
  try {
    // Generate OTP and send it to the user's email
    const otpResult = await AdminOTPService(userData.email);
    console.log(otpResult);
    if (otpResult.status !== "success") {
      return { status: "fail", message: "Failed to send OTP" };
    }

    // Store user data and OTP in the database
    const newUser = new adminModel({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      address: userData.address,
      otp: otpResult.otp,
      role: "admin", // Store the OTP for verification later
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

const createAdminAccount = async (userTempData) => {
  try {
    // Check if a user with the provided email already exists
    const existingUser = await adminModel.findOne({
      email: userTempData.email,
    });

    // If a user with the provided email exists, update their information
    if (existingUser) {
      await adminModel.updateOne(
        { email: userTempData.email },
        { $set: { otp: "0", password: userTempData.password } }
      );
      return { status: "success", message: "Admin updated successfully" };
    }

    // If no user with the provided email exists, create a new user
    const newUser = new adminModel({
      name: userTempData.name,
      email: userTempData.email,
      password: userTempData.password,
      role: userTempData.role || "admin",
      address: userTempData.address,
      // Other fields...
    });
    await newUser.save();

    return { status: "success", message: "Admin registered successfully" };
  } catch (error) {
    console.error("Error creating/updating admin account:", error);
    return { status: "fail", message: "Error creating/updating admin account" };
  }
};

const loginAdmin = async (email, password) => {
  try {
    // Find user by email
    const user = await adminModel.findOne({ email });

    if (!user) {
      return { status: "fail", message: "Admin not found" };
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

const SaveProfileService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    console.log(user_id);

    let reqBody = req.body;
    reqBody.userID = user_id;
    const profile = await ProfileModel.updateOne(
      { userID: user_id }.populate,
      { $set: reqBody },
      { upsert: true }
    );
    return {
      status: "success",
      message: "Profile Save Success",
      data: profile,
    };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong" };
  }
};

module.exports = {
  registerAdminWithOTP,
  createAdminAccount,
  loginAdmin,
  SaveProfileService,
};
