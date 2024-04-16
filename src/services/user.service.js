const userModel = require("../models/user.model");

const createUser = async () => {
  const userData = req.body;
  userData.role = "customer";

  try {
    const resp = await userModel.create(userData);

    res.status(201).send({
      msg: "User created!",
      data: resp,
    });
  } catch (e) {
    res.status(500).send("Someting went wrong!");
  }
};

module.exports = {
  createUser,
};
