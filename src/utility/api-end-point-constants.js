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

const category = {
  category: "/category",
};

const product = {
  product: "/product",
  allProducts: "/products",
  byBrands: "/productsByBrand/:BrandID",
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
};
