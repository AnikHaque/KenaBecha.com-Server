const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const UserModel = require("../models/user.model");
const EmailSend = require("../utility/EmailHelper");
const { EncodeToken } = require("../utility/TokenHelper");
const adminModel = require("../models/admin.model");

const UserOTPService = async (email) => {
  try {
    let code = Math.floor(100000 + Math.random() * 900000);

    let EmailText = `Your Verification Code is= ${code}`;
    let EmailSubject = "Email Verification";

    // Call EmailSend function (assuming it's defined elsewhere)
    await EmailSend(email, EmailText, EmailSubject);

    // Update OTP in the database
    await UserModel.updateOne(
      { email: email },
      { $set: { otp: code } } // Remove 'upsert: true'
    );

    return {
      status: "success",
      message: "6 Digit OTP has been sent",
      otp: code,
    }; // Include the OTP in the response
  } catch (e) {
    return { status: "fail", message: e };
  }
};

const AdminOTPService = async (email) => {
  try {
    let code = Math.floor(100000 + Math.random() * 900000);

    let EmailText = `Your Verification Code is= ${code}`;
    let EmailSubject = "Email Verification";

    // Call EmailSend function (assuming it's defined elsewhere)
    await EmailSend(email, EmailText, EmailSubject);

    // Update OTP in the database
    await adminModel.updateOne(
      { email: email },
      { $set: { otp: code } } // Remove 'upsert: true'
    );

    return {
      status: "success",
      message: "6 Digit OTP has been sent",
      otp: code,
    }; // Include the OTP in the response
  } catch (e) {
    return { status: "fail", message: e };
  }
};

const InstructorOTPService = async (email) => {
  try {
    let code = Math.floor(100000 + Math.random() * 900000);

    let EmailText = `Your Verification Code is= ${code}`;
    let EmailSubject = "Email Verification";

    // Call EmailSend function (assuming it's defined elsewhere)
    await EmailSend(email, EmailText, EmailSubject);

    // Update OTP in the database
    await instructorModel.updateOne(
      { email: email },
      { $set: { otp: code } } // Remove 'upsert: true'
    );

    return {
      status: "success",
      message: "6 Digit OTP has been sent",
      otp: code,
    }; // Include the OTP in the response
  } catch (e) {
    return { status: "fail", message: e };
  }
};

const VerifyOTPService = async (email, otp) => {
  try {
    otp = otp.toString();

    console.log("Verifying OTP for email:", email);
    console.log("Provided OTP:", otp);

    const user = await UserModel.findOne({ email: email, otp: otp });

    console.log("User found in database:", user);

    if (user) {
      const token = EncodeToken(email, user._id.toString());
      await UserModel.updateOne({ email: email }, { $set: { otp: "0" } });
      await UserModel.updateOne({ email: email }, { $unset: { otp: 1 } }); // Remove the OTP field
      return { status: "success", message: "Valid OTP", token: token };
    } else {
      return { status: "fail", message: "Invalid OTP" };
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return { status: "fail", message: "Error verifying OTP" };
  }
};

const VerifyAdminOTPService = async (email, otp) => {
  try {
    otp = otp.toString();

    console.log("Verifying OTP for email:", email);
    console.log("Provided OTP:", otp);

    const admin = await adminModel.findOne({ email: email, otp: otp });

    console.log("Admin found in database:", admin);

    if (admin) {
      const token = EncodeToken(email, admin._id.toString());
      await adminModel.updateOne({ email: email }, { $set: { otp: "0" } });
      await adminModel.updateOne({ email: email }, { $unset: { otp: 1 } }); // Remove the OTP field
      return { status: "success", message: "Valid OTP", token: token };
    } else {
      return { status: "fail", message: "Invalid OTP" };
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return { status: "fail", message: "Error verifying OTP" };
  }
};

const VerifyInstructorOTPService = async (email, otp) => {
  try {
    otp = otp.toString();

    console.log("Verifying OTP for email:", email);
    console.log("Provided OTP:", otp);

    const instructor = await instructorModel.findOne({
      email: email,
      otp: otp,
    });

    console.log("Instructor found in database:", admin);

    if (instructor) {
      const token = EncodeToken(email, user._id.toString());
      await instructorModel.updateOne({ email: email }, { $set: { otp: "0" } });
      await instructorModel.updateOne({ email: email }, { $unset: { otp: 1 } }); // Remove the OTP field
      return { status: "success", message: "Valid OTP", token: token };
    } else {
      return { status: "fail", message: "Invalid OTP" };
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return { status: "fail", message: "Error verifying OTP" };
  }
};

module.exports = {
  UserOTPService,
  VerifyOTPService,
  AdminOTPService,
  InstructorOTPService,
  VerifyAdminOTPService,
  VerifyInstructorOTPService,
};
