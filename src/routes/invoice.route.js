const express = require("express");
const invoiceControllers = require("../controllers/invoice.controller");
const apiEndPoints = require("../utility/api-end-point-constants");
const AuthVerificationMiddleware = require("../middlewares/AuthVerification");

const invoiceRouter = express.Router();
const invoiceEndPoints = apiEndPoints.invoice;

invoiceRouter.post(
  invoiceEndPoints.createinvoice,
  AuthVerificationMiddleware,
  invoiceControllers.CreateInvoice
);

module.exports = invoiceRouter;
