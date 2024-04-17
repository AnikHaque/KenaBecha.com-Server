const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const UserModel = require("../models/user.model");

const signInService = async (email, password) => {
  try {
    const user = await UserModel.findOne({ email, password });
    if (!user) {
      throw new Error("User not found");
    }

    const userData = {
      name: user.name,
      email: user.email,
      role: user.role,
      address: user.address,
      phone: user.phone,
    };

    const authToken = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour
        data: userData,
      },
      process.env.AUTH_SECRET
    );

    await UserModel.findOneAndUpdate({ email }, { authToken });

    return { success: true, userData, authToken };
  } catch (error) {
    console.error("Error in signInService:", error);
    return { success: false, message: "User not found" };
  }
};

const signOutService = async (email) => {
  try {
    const user = await UserModel.findOneAndUpdate({ email }, { authToken: "" });
    return { success: true, data: user };
  } catch (error) {
    console.error("Error in signOutService:", error);
    return { success: false, message: "Something went wrong" };
  }
};

// const forgetPasswordService = async (email) => {
//   try {
//     const user = await UserModel.findOne({ email });
//     if (!user) throw Error("User not found");

//     const OTP = Math.floor(Math.random() * 1000000);

//     const transporter = nodemailer.createTransport({
//       host: process.env.MAILTRAP_HOST,
//       port: process.env.MAILTRAP_PORT,
//       auth: {
//         user: process.env.MAILTRAP_USER,
//         pass: process.env.MAILTRAP_PASS,
//       },
//     });

//     const info = await transporter.sendMail({
//       from: '"Task Tracker 👻" <noreply@task-tracker.com>',
//       to: email,
//       subject: "Task Tracker OTP",
//       html: `<b>OTP: ${OTP}</b>`,
//     });

//     const jwtToken = jwt.sign(
//       {
//         exp: Math.floor(Date.now() / 1000) + 30, // 30 seconds
//         data: { email },
//       },
//       process.env.AUTH_SECRET
//     );

//     await ResetPasswordModel.create({ otpCode: OTP, token: jwtToken });

//     return { success: true, data: info };
//   } catch (error) {
//     console.error("Error in forgetPasswordService:", error);
//     return { success: false, message: "Email does not exist in our database" };
//   }
// };

// const otpValidityService = async (otp) => {
//   try {
//     const resetPasswordData = await ResetPasswordModel.findOne({
//       otpCode: otp,
//     });
//     if (!resetPasswordData) throw Error("Invalid OTP");

//     const decodedData = jwt.verify(
//       resetPasswordData.token,
//       process.env.AUTH_SECRET
//     );
//     return { success: true, data: decodedData.data };
//   } catch (error) {
//     console.error("Error in otpValidityService:", error);
//     return { success: false, message: "Invalid OTP" };
//   }
// };

// const resetPasswordService = async (email, newPassword) => {
//   try {
//     const user = await UserModel.findOneAndUpdate(
//       { email },
//       { password: newPassword }
//     );
//     return { success: true, data: user };
//   } catch (error) {
//     console.error("Error in resetPasswordService:", error);
//     return { success: false, message: "Something went wrong" };
//   }
// };

module.exports = {
  signInService,
  signOutService,
};
