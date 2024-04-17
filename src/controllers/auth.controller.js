const { signInService, signOutService } = require("../services/auth.service");

const signInController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const signInResult = await signInService(email, password);
    if (signInResult.success) {
      res.status(201).json({
        msg: "Session created!",
        data: {
          ...signInResult.userData,
          auth_token: signInResult.authToken,
        },
      });
    } else {
      res.status(404).send(signInResult.message);
    }
  } catch (error) {
    console.error("Error in signInController:", error);
    res.status(500).send("Internal Server Error");
  }
};

const signOutController = async (req, res) => {
  const { email } = req.decodedData.data;

  try {
    const signOutResult = await signOutService(email);
    if (signOutResult.success) {
      res.status(200).json({
        msg: "Successfully signed out!",
        data: signOutResult.data,
      });
    } else {
      res.status(500).send(signOutResult.message);
    }
  } catch (error) {
    console.error("Error in signOutController:", error);
    res.status(500).send("Internal Server Error");
  }
};

// const forgetPasswordController = async (req, res) => {
//   const { email } = req.query;

//   try {
//     const forgetPasswordResult = await forgetPasswordService(email);
//     if (forgetPasswordResult.success) {
//       res.status(200).json({
//         msg: "Email sent!",
//         data: forgetPasswordResult.data,
//       });
//     } else {
//       res.status(404).send(forgetPasswordResult.message);
//     }
//   } catch (error) {
//     console.error("Error in forgetPasswordController:", error);
//     res.status(500).send("Internal Server Error");
//   }
// };

// const otpValidityController = async (req, res) => {
//   const { otp } = req.body;

//   try {
//     const otpValidityResult = await otpValidityService(otp);
//     if (otpValidityResult.success) {
//       res.status(200).json({
//         msg: "OTP valid!",
//         data: otpValidityResult.data,
//       });
//     } else {
//       res.status(404).send(otpValidityResult.message);
//     }
//   } catch (error) {
//     console.error("Error in otpValidityController:", error);
//     res.status(500).send("Internal Server Error");
//   }
// };

// const resetPasswordController = async (req, res) => {
//   const { email, new_password } = req.body;

//   try {
//     const resetPasswordResult = await resetPasswordService(email, new_password);
//     if (resetPasswordResult.success) {
//       res.status(200).json({
//         msg: "Password updated!",
//         data: resetPasswordResult.data,
//       });
//     } else {
//       res.status(500).send(resetPasswordResult.message);
//     }
//   } catch (error) {
//     console.error("Error in resetPasswordController:", error);
//     res.status(500).send("Internal Server Error");
//   }
// };

module.exports = {
  signInController,
  signOutController,
};
