const brandServices = require("../services/brand.service");
const { sendResponse } = require("../utility/sendResponse");

const createBrand = async (req, res) => {
  const brandData = req.body;

  const resp = await brandServices.createBrandIntoDb(brandData);

  res.status(201).send({
    statusCode: 201,
    success: true,
    message: "Brand created successfully",
    data: resp,
  });
  // sendResponse(res, {
  //   statusCode: 201,
  //   success: true,
  //   message: "Brand created successfully",
  //   data: resp,
  // });
};

module.exports = {
  createBrand,
};
