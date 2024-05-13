const ProductModel = require("../models/product.model");
const mongoose = require("mongoose");
const ReviewModel = require("../models/review.model");
const ProductDetailsModel = require("../models/productDetails.model");

const ObjectId = mongoose.Types.ObjectId;

const createProductIntoDb = async (payload) => {
  const product = await ProductModel.create(payload);

  return product;
};

const findAllProductsFromDb = async () => {
  const products = await ProductModel.find()
    .populate("categoryID")
    .populate("brandID");
  return products;
};

const ListByBrandService = async (req) => {
  try {
    let BrandID = new ObjectId(req.params.BrandID);

    let MatchStage = { $match: { brandID: BrandID } };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };

    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    // Query
    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

// list by category
const ListByCategoryService = async (req) => {
  try {
    let CategoryID = new ObjectId(req.params.CategoryID);
    let MatchStage = { $match: { categoryID: CategoryID } };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

// list by remark
const ListByRemarkService = async (req) => {
  try {
    let Remark = req.params.Remark;
    let MatchStage = { $match: { remark: Remark } };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

const ListByKeywordService = async (req) => {
  try {
    let SearchRegex = { $regex: req.params.Keyword, $options: "i" };
    let SearchParams = [{ title: SearchRegex }, { shortDes: SearchRegex }];
    let SearchQuery = { $or: SearchParams };

    let MatchStage = { $match: SearchQuery };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

const DetailsService = async (req) => {
  try {
    // Validate ProductID format
    const productId = req.params.ProductID;
    if (!/^[0-9a-fA-F]{24}$/.test(productId)) {
      throw new Error("Invalid ProductID format");
    }

    let ProductID = new ObjectId(productId);
    let MatchStage = { $match: { _id: ProductID } };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let JoinWithDetailsStage = {
      $lookup: {
        from: "productdetails",
        localField: "_id",
        foreignField: "productID",
        as: "details",
      },
    };

    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let UnwindDetailsStage = { $unwind: "$details" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      JoinWithDetailsStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      UnwindDetailsStage,
      ProjectionStage,
    ]);

    return data;
  } catch (err) {
    // Handle errors gracefully
    throw new Error(err);
  }
};
const createDetails = async (detailData) => {
  try {
    // Create new product details
    const newDetails = new ProductDetailsModel(detailData);

    // Save the details to the database
    await newDetails.save();

    return newDetails;
  } catch (err) {
    throw new Error(err);
  }
};
const CreateReviewService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    let data = await ReviewModel.create({
      productID: reqBody["productID"],
      userID: user_id,
      des: reqBody["des"],
      rating: reqBody["rating"],
    });
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};

const ReviewListService = async (req) => {
  try {
    let ProductID = new ObjectId(req.params.ProductID);
    let MatchStage = { $match: { productID: ProductID } };

    let JoinWithProfileStage = {
      $lookup: {
        from: "profiles",
        localField: "userID",
        foreignField: "userID",
        as: "profile",
      },
    };
    let UnwindProfileStage = { $unwind: "$profile" };
    let ProjectionStage = {
      $project: { des: 1, rating: 1, "profile.cus_name": 1 },
    };

    let data = await ReviewModel.aggregate([
      MatchStage,
      JoinWithProfileStage,
      UnwindProfileStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

const ListByFilterService = async (req) => {
  try {
    let matchConditions = {};
    if (req.body["categoryID"]) {
      matchConditions.categoryID = new ObjectId(req.body["categoryID"]);
    }
    if (req.body["brandID"]) {
      matchConditions.brandID = new ObjectId(req.body["brandID"]);
    }
    let MatchStage = { $match: matchConditions };

    let AddFieldsStage = {
      $addFields: { numericPrice: { $toInt: "$price" } },
    };
    let priceMin = parseInt(req.body["priceMin"]);
    let priceMax = parseInt(req.body["priceMax"]);
    let PriceMatchConditions = {};
    if (!isNaN(priceMin)) {
      PriceMatchConditions["numericPrice"] = { $gte: priceMin };
    }
    if (!isNaN(priceMax)) {
      PriceMatchConditions["numericPrice"] = {
        ...(PriceMatchConditions["numericPrice"] || {}),
        $lte: priceMax,
      };
    }
    let PriceMatchStage = { $match: PriceMatchConditions };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      AddFieldsStage,
      PriceMatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

const productServices = {
  createProductIntoDb,
  findAllProductsFromDb,
  ListByBrandService,
  ListByCategoryService,
  ListByRemarkService,
  ListByKeywordService,
  DetailsService,
  CreateReviewService,
  ReviewListService,
  ListByFilterService,
  createDetails,
};

module.exports = productServices;
