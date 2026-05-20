import express from "express";

import { userRoute } from "./modules/users/users.route";
import { profileRoute } from "./modules/profiles/profile.route";
import { authRoute } from "./modules/auth/auth.route";

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
import fs from "fs";
import logger from "./middleware/logger";
app.use(logger);

app.use("/api/users", userRoute);
app.use("/api/profiles", profileRoute);
app.use("/api/auth", authRoute);

export default app;
