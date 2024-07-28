const blogServices = require("../services/blog.service");
const sendResponse = require("../utility/sendResponse");

const createBlog = async (req, res) => {
  const blogData = req.body;

  try {
    const resp = await blogServices.createBlogIntoDb(blogData);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Blog created successfully",
      data: resp,
    });
  } catch (err) {
    // Handle errors here
    sendResponse(res, {
      statusCode: err.statusCode || 500,
      success: false,
      message: err.message || "Internal Server Error",
      data: null,
    });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const Blogs = await blogServices.getAllBlogsFromDb();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Blogs retrieved successfully",
      data: Blogs,
    });
  } catch (err) {
    sendResponse(res, {
      statusCode: err.statusCode || 500,
      success: false,
      message: err.message || "Internal Server Error",
      data: null,
    });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
};
