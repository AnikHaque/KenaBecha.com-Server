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

const app = new express();

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

module.exports = app;
