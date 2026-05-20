import type { NextFunction, Request, Response } from "express";
import fs from "fs";

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    "method-Url-Time:",
    req.method,
    req.url,
    new Date().toISOString(),
  );
  const log = ` Method ->${req.method} - URL->${req.url} - Date->${new Date().toISOString()}\n`;
  fs.appendFile("logger.txt", log, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
  next();
};

export default logger;
