// const express = require('express')
import express, { type Request, type Response } from "express";

import { config } from "./config/config";
import { pool } from "./db";
import { userRoute } from "./modules/users/users.route";

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

const port = config.port || 5000;

app.use("/api/users", userRoute);

app.get("/", (req: Request, res: Response) => {
  // res.send("Hello World!");
  res.status(200).json({
    message: "hello world",
    author: "next level",
  });
});

app.put("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, password, age, is_active } = req.body;

  try {
    const result = await pool.query(
      `UPDATE users SET name=COALESCE($1,name),  password=COALESCE($2,password), age=COALESCE($3,age), is_active=COALESCE($4,is_active), updated_at=Now() WHERE id=$5 RETURNING *`,
      [name, password, age, is_active, id],
    );
    res.status(200).json({
      message: "user updated successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: error,
    });
  }
});

export default app;
