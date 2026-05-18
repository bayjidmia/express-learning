import type { Request, Response } from "express";
import { pool } from "../../db";
import { createUserintoDb } from "./user.services";

const createUser = async (req: Request, res: Response) => {
  //   const { name, email, password, age } = req.body;
  try {
    const result = await createUserintoDb(req.body);
    res.status(201).json({
      message: " user created sucessfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: error,
    });
  }
};

export { createUser };
