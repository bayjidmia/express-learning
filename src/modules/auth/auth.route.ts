import { Router } from "express";
import { userLogin } from "./auth.controller";

const route = Router();

route.post("/login", userLogin);

export const authRoute = route;
