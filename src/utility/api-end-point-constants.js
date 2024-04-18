const user = {
  user: "/user",
};

const auth = {
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
};

const flashdeals = {
  flashdeals: "/flashdeal",
};

module.exports = {
  user,
  auth,
  brand,
  category,
  product,
  flashdeals,
  review,
};
