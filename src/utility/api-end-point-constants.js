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
};

const flashdeals = {
  flashdeals: "/flashdeal",
};

module.exports = {
  user,
  admin,
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
