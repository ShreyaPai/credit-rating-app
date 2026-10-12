import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/error";

export const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err);

  const statusCode = err instanceof AppError ? err.statusCode : 500;

  return res.status(statusCode).json({
    message: statusCode === 500 ? "Internal server error" : err.message,
  });
};
