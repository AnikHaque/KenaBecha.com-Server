const userServices = require("../services/user.service");

const createUser = async (req, res) => {
  const userData = req.body;
  userData.role = "executive";
  try {
    const resp = await userServices.createUserIntoDb(userData);

    res.status(201).send({
      msg: "User created!",
      data: resp,
    });
  } catch (e) {
    res.status(500).send("Someting went failed!");
  }
};

module.exports = {
  createUser,
};
