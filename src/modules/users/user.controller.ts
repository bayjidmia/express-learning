import type { Request, Response } from "express";
import { pool } from "../../db";
import {
  createUserintoDb,
  getAllUsersfromDb,
  getUserbyIdfromDb,
} from "./user.services";

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

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await getAllUsersfromDb();
    res.status(200).json({
      message: "users retrived successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: error,
    });
  }
};

const getUserbyId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await getUserbyIdfromDb(id as string);

    res.status(200).json({
      message: "user retrieved successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: error,
    });
  }
};

export { createUser, getAllUsers, getUserbyId };
