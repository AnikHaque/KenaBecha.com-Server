const AppError = require("../errors/AppError");
const handleCastError = require("../errors/handleCastError");
const handleDuplicateError = require("../errors/handleDuplicateError");
const handleValidationError = require("../errors/handleValidationError");
const handleZodError = require("../errors/handleZodError");

const globalErrorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "Something went wrong!";
  let errorSources = [{ path: "", message: "Something went wrong" }];

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    errorSources = [{ path: "", message: err.message }];
  } else if (err.name === "CastError") {
    const castError = handleCastError(err);
    statusCode = castError.statusCode;
    message = castError.message;
    errorSources = castError.errorSources;
  } else if (err.code === 11000) {
    const duplicateError = handleDuplicateError(err);
    statusCode = duplicateError.statusCode;
    message = duplicateError.message;
    errorSources = duplicateError.errorSources;
  } else if (err.name === "ValidationError") {
    const validationError = handleValidationError(err);
    statusCode = validationError.statusCode;
    message = validationError.message;
    errorSources = validationError.errorSources;
  } else if (err.name === "ZodError") {
    const zodError = handleZodError(err);
    statusCode = zodError.statusCode;
    message = zodError.message;
    errorSources = zodError.errorSources;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    err,
    stack: process.env.NODE_ENV === "development" ? err?.stack : null,
  });
};

module.exports = globalErrorHandler;
