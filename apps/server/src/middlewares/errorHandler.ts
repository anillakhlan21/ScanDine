import { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError";

// Global Error Handling Middleware
const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  let { statusCode, message } = err;

  // If the error is not an instance of AppError, treat it as a 500 (Internal Server Error)
  if (!(err instanceof AppError)) {
    statusCode = 500;
    message = "Something went wrong!";
  }

  console.error(`[ERROR] ${req.method} ${req.url} - ${message}`);

  return res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
  });
};

export default errorHandler;