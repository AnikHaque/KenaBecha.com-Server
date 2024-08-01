const { DecodeToken } = require("../utility/TokenHelper");

module.exports = (req, res, next) => {
  // Receive Token
  let token = req.headers["authorization"].replace("Bearer ", ""); // Ensure token is formatted correctly
  console.log("Received token:", token); // Log the received token

  // Token Decode
  let decoded = DecodeToken(token);
  console.log("Decoded token:", decoded); // Log the decoded token

  // Request Header Email+UserID Add
  if (decoded === null) {
    console.log("Unauthorized access");
    return res
      .status(401)
      .json({ status: "fail", message: "Unauthorized access" });
  } else {
    req.user = {
      email: decoded.email,
      _id: decoded.user_id,
    };
    next();
  }
};
