const { signInService } = require("../services/auth.service");

const signInController = async (req, res) => {
  try {
    let reqBody = req.body;
    const result = await signInService(reqBody);
    if (result.status === "success") {
      res.status(200).json(result);
    } else {
      res.status(401).json(result);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "fail", data: error });
  }
};

module.exports = {
  signInController,
};
