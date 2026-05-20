import type { Request, Response } from "express";
import { loginUserInDb } from "./auth.service";

const userLogin = async (req: Request, res: Response) => {
  try {
    const result = await loginUserInDb(req.body);
    res.status(200).json({
      message: "users retrived successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: error,
    });
  }
};

export { userLogin };
