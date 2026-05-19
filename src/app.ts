// const express = require('express')
import express, { type Request, type Response } from "express";

import { config } from "./config/config";
import { pool } from "./db";
import { userRoute } from "./modules/users/users.route";
import { profileRoute } from "./modules/profiles/profile.route";

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

const port = config.port || 5000;

app.use("/api/users", userRoute);
app.use("/api/profiles", profileRoute);

export default app;
