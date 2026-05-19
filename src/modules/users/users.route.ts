import { Router } from "express";

import { createUser, getAllUsers, getUserbyId } from "./user.controller";

const router = Router();

router.post("/", createUser);
router.get("/", getAllUsers);

router.get("/:id", getUserbyId);

export const userRoute = router;
