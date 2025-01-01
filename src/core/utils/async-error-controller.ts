import { NextFunction, Request, Response } from "express";

type Controller = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

const asyncErrorController = (controller: Controller) => {
  return (req: Request, res: Response, next: NextFunction) => {
    controller(req, res, next).catch((err) => {
      next(err);
    });
  };
};

export default asyncErrorController;
