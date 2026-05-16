// const express = require('express')
import express, { type Request, type Response } from "express";
const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  // res.send("Hello World!");
  res.status(200).json({
    message: "hello world",
    author: "next level",
  });
});

app.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
