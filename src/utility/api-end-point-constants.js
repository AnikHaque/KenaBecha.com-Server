const user = {
  user: "/register",
  verify: "/verifyOtp",
  login: "/login",
  logout: "/logout",
  createProfile: "/create-profile",
};

const admin = {
  admin: "/registerAdmin",
  verifyAdmin: "/verifyOtpAdmin",
  loginAdmin: "/loginAdmin",
  logoutAdmin: "/logoutAdmin",
  createAdminProfile: "/create-AdminProfile",
};

const instructor = {
  instructor: "/registerInstructor",
  verifyInstructor: "/verifyOtpInstructor",
  loginInstructor: "/loginInstructor",
  logoutInstructor: "/logoutInstructor",
  createInstructorProfile: "/create-InstructorProfile",
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
};

const category = {
  category: "/category",
  allCategories: "/categories",
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
  instructor,
  brand,
  category,
  product,
  flashdeals,
  review,
  wishlist,
  cartlist,
  invoice,
  payment,
  course,
};
