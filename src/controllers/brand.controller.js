const brandServices = require("../services/brand.service");

const createBrand = async (req, res) => {
  const brandData = req.body;
  try {
    const resp = await brandServices.createBrandIntoDb(brandData);

    res.status(201).send({
      msg: "Brand created!",
      data: resp,
    });
  } catch (e) {
    res.status(500).send("Someting went failed!");
  }
};

module.exports = {
  createBrand,
};
