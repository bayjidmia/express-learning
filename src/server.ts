// const express = require('express')
import express, { type Request, type Response } from "express";
import { Pool } from "pg";
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_dVu2Kgn8oqif@ep-divine-bonus-aqevtxvq-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

const initdb = async () => {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(20) NOT NULL,
      email VARCHAR(20) NOT NULL UNIQUE,
      password VARCHAR(20) NOT NULL,
      is_active BOOLEAN DEFAULT true,
      age int,
      created_at TIMESTAMP DEFAULT Now(),
      updated_at TIMESTAMP DEFAULT Now()
    )`);
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};

initdb();

app.get("/", (req: Request, res: Response) => {
  // res.send("Hello World!");
  res.status(200).json({
    message: "hello world",
    author: "next level",
  });
});

app.post("/api/users", async (req: Request, res: Response) => {
  const { name, email, password, age } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO users (name, email, password, age) VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, email, password, age],
    );

    res.status(201).json({
      message: " user created sucessfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: error,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
