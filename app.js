const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const mongoSanitize = require("express-mongo-sanitize");
const bodyParser = require("body-parser");
require("dotenv").config();
const dbConnection = require("./db");
const userRouter = require("./src/routes/user.route");
const brandRouter = require("./src/routes/brand.route");
const categoryRouter = require("./src/routes/category.route");
const globalErrorHandler = require("./src/middlewares/globalErrorHandler");
const productRouter = require("./src/routes/product.route");
const flashDealsRouter = require("./src/routes/flashDeals.route");
const wishRouter = require("./src/routes/wishlist.route");
const cartRouter = require("./src/routes/cart.route");
const invoiceRouter = require("./src/routes/invoice.route");
const paymentRouter = require("./src/routes/payment.route");

const app = express();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(cors());
app.use(cookieParser());
app.use(mongoSanitize());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dbConnection().catch((err) => console.log("Error occured::", err));

app.use(userRouter);
app.use(brandRouter);
app.use(categoryRouter);
app.use(productRouter);
app.use(flashDealsRouter);
app.use(wishRouter);
app.use(cartRouter);
app.use(invoiceRouter);
app.use(paymentRouter);

app.get("/", (req, res) => {
  res.send("Hi Next Level Developer !");
});
app.use(globalErrorHandler);

module.exports = app;
