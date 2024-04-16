const categoryServices = require("../services/category.service");

const createCategory = async (req, res) => {
  const categoryData = req.body;
  try {
    const resp = await categoryServices.createCategoryIntoDb(categoryData);

    res.status(201).send({
      statusCode: 201,
      success: true,
      message: "Category created successfully",
      data: resp,
    });
  } catch (e) {
    res.status(500).send({
      statusCode: 500,
      success: false,
      message: "Something went failed!",
    });
  }
};

module.exports = {
  createCategory,
};
