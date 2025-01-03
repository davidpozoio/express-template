import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import HttpError from "../exception/http-error";

const globalErrorHandler = async (
  error: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
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

  res.status(500).json({
    error: {
      message: "there was an error",
    },
  });
};

export default globalErrorHandler;
