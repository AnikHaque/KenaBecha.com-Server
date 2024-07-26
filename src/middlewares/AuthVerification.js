const { DecodeToken } = require("../utility/TokenHelper");

module.exports = (req, res, next) => {
  // Receive Token
  let token = req.headers["authorization"]; // Change "token" to "authorization"
  console.log("Received token:", token); // Add this line to check the received token

  // Token Decode
  let decoded = DecodeToken(token);
  console.log("Decoded token:", decoded); // Add this line to check the decoded token

  // Request Header Email+UserID Add
  if (decoded === null) {
    console.log("Unauthorized access");
    return res
      .status(401)
      .json({ status: "fail", message: "Unauthorized access" });
  } else {
    let email = decoded["email"];
    let user_id = decoded["user_id"];
    req.headers.email = email;
    req.headers.user_id = user_id;
    next();
  }
};
