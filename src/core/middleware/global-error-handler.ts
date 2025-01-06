import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import HttpError from "../exception/http-error.exception";
import ValidationErrorException from "core/exception/validation.exception";

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

  res.status(500).json({
    error: {
      ...error,
      message: "there was an error",
    },
  });
};

export default globalErrorHandler;
