const user = {
  user: "/user",
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
  brand,
  category,
  product,
  flashdeals,
};
