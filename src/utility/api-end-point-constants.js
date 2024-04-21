const user = {
  user: "/register",
  verify: "/verifyOtp",
  login: "/login",
  logout: "/logout",
  createProfile: "/create-profile",
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
  allProducts: "/products",
  byBrands: "/productsByBrand/:BrandID",
  byCategory: "/productsByCategory/:CategoryID",
  byRemark: "/productsByRemark/:Remark",
  details: "/ProductDetails/:ProductID",
  review: "/CreateReview",
  showReview: "/ProductReviewList/:ProductID",
};

const flashdeals = {
  flashdeals: "/flashdeal",
};

module.exports = {
  user,
  brand,
  category,
  product,
  flashdeals,
  review,
  wishlist,
  cartlist,
  invoice,
  payment,
};
