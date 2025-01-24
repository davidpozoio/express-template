import type {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import HttpError from "../exception/http-error";
import ValidationErrorException from "../exception/validation-error";
import ENV from "../environment/environment";

const globalErrorHandler = async (
  error: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof HttpError) {
    res.status(error.statusCode).json({
      error: {
        message: error.message,
        code: error.code,
      },
    });
    return;
  }

  if (error instanceof ValidationErrorException) {
    res.status(error.statusCode).json({
      error: {
        ...error.errorObject,
        message: error.message,
        code: error.code,
      },
    });
    return;
  }

  if (ENV.MODE === "dev") {
    res.status(500).json({
      error: {
        ...error,
        message: "there was an error",
      },
    });
    return;
  }

  res.status(500).json({
    error: {
      message: "there was an error",
    },
  });
};

export default globalErrorHandler;
