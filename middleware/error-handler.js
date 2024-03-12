import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err.message);
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: `Something went wrong, ${err.message}`,
  };
  if (err.name === "ValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    // defaultError.message = `Something went wrong, ${err.message}`;
    defaultError.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
  }
  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.message = `${Object.keys(
      err.keyValue,
    )} field name has to be unique`;
  }
  res.status(defaultError.statusCode).json({
    status: "error",
    message: defaultError.message,
  });
};

export default errorHandlerMiddleware;
