import type { Request, Response } from "express";
import { createProfileintoDb } from "./profile.service";

const creaqteProfile = async (req: Request, res: Response) => {
  try {
    const result = await createProfileintoDb(req.body);
    res.status(201).json({
      success: true,
      message: " profilescreated sucessfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

export { creaqteProfile };
