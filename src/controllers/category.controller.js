const categoryServices = require("../services/category.service");

const createCategory = async (req, res) => {
  const categoryData = req.body;
  try {
    const resp = await categoryServices.createCategoryIntoDb(categoryData);

    res.status(201).send({
      msg: "category created!",
      data: resp,
    });
  } catch (e) {
    res.status(500).send("Someting went failed!");
  }
};

module.exports = {
  createCategory,
};
