const jwt = require("jsonwebtoken");

exports.EncodeToken = (email, user_id, role) => {
  let KEY = "123-ABC-XYZ";
  let EXPIRE = { expiresIn: "90d" };
  let PAYLOAD = { email: email, user_id: user_id, role: role };
  return jwt.sign(PAYLOAD, KEY, EXPIRE);
};

exports.DecodeToken = (token) => {
  try {
    let KEY = "123-ABC-XYZ";
    return jwt.verify(token, KEY);
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
