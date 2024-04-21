const express = require("express");
const paymentControllers = require("../controllers/invoice.controller");
const apiEndPoints = require("../utility/api-end-point-constants");
const AuthVerificationMiddleware = require("../middlewares/AuthVerification");

const paymentRouter = express.Router();
const paymentEndPoints = apiEndPoints.payment;

paymentRouter.post(
  paymentEndPoints.paymentSuccess,
  paymentControllers.PaymentSuccess
);

paymentRouter.post(
  paymentEndPoints.paymentFail,
  paymentControllers.PaymentFail
);

paymentRouter.post(
  paymentEndPoints.paymentCancel,
  paymentControllers.PaymentCancel
);

paymentRouter.post(paymentEndPoints.paymentIPN, paymentControllers.PaymentIPN);

module.exports = paymentRouter;
