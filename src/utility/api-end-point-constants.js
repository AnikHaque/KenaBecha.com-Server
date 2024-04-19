const user = {
  user: "/register",
  verify: "/verifyOtp",
  login: "/login",
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
};

const product = {
  product: "/product",
  allProducts: "/products",
  byBrands: "/productsByBrand/:BrandID",
  byCategory: "/productsByCategory/:CategoryID",
  byRemark: "/productsByRemark/:Remark",
  details: "/ProductDetails/:ProductID",
  review: "/CreateReview",
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
};
