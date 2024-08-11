const user = {
  user: "/register",
  getUsers: "/users",
  verify: "/verifyOtp",
  login: "/login",
  logout: "/logout",
  changePassword: "/change-password",
  createProfile: "/create-profile",
};

const admin = {
  admin: "/registerAdmin",
  verifyAdmin: "/verifyOtpAdmin",
  loginAdmin: "/loginAdmin",
  logoutAdmin: "/logoutAdmin",
  createAdminProfile: "/create-AdminProfile",
};

const wishlist = {
  savewishlist: "/SaveWishList",
  removewishlist: "/removeWishList",
};

const cartlist = {
  savecartlist: "/SaveCartList",
  updatecartlist: "/UpdateCartList/:cartID",
  removecartlist: "/RemoveCartList",
  showcartlist: "/CartList",
};

const invoice = {
  createinvoice: "/CreateInvoice",
  showInvoiceList: "/InvoiceList",
  invoiceProductList: "/InvoiceProductList/:invoice_id",
};

const payment = {
  paymentSuccess: "/PaymentSuccess/:trxID",
  paymentFail: "/PaymentFail/:trxID",
  paymentCancel: "/PaymentCancel/:trxID  ",
  paymentIPN: "/PaymentIPN/:trxID",
};

const brand = {
  brand: "/brand",
  allBrands: "/brands",
};

const review = {
  review: "/review",
  allReviews: "/reviews",
};

const category = {
  category: "/category",
  allCategories: "/categories",
};

const blogcategory = {
  blogcategory: "/blogcategory",
  allBlogCategories: "/blogcategories",
};

const enrollment = {
  enrollment: "/create-enrollment",
  allEnrollments: "/get-enrollments",
  deleteEnrollment: "/enrollments/:id",
};

const fullstack = {
  fullstack: "/fullstack",
  allFullstacks: "/fullstacks",
  singlefullstack: "/fullstack/:email",
  updateEnrollment: "/fullstack/:id",
};

const blog = {
  blog: "/blog",
  allBlogs: "/blogs",
};

const product = {
  product: "/product",
  createProductDetails: "/create-productDetails",
  allProducts: "/products",
  byBrands: "/productsByBrand/:BrandID",
  byCategory: "/productsByCategory/:CategoryID",
  byRemark: "/productsByRemark/:Remark",
  byKeyword: "/ProductListByKeyword/:Keyword",
  details: "/ProductDetails/:ProductID",
  productFilterList: "/ProductListByFilter",
  review: "/CreateReview",
  showReview: "/ProductReviewList/:ProductID",
};

const course = {
  course: "/course",
  allCourses: "/courses",
  updateCourse: "/courses/:id",
  deleteCourse: "/courses/:id",
};

const flashdeals = {
  flashdeals: "/flashdeal",
};

module.exports = {
  user,
  admin,
  brand,
  category,
  enrollment,
  fullstack,
  product,
  flashdeals,
  review,
  wishlist,
  cartlist,
  invoice,
  payment,
  course,
  blog,
  blogcategory,
};
