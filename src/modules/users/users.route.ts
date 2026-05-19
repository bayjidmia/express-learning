import { Router } from "express";

import {
  createUser,
  getAllUsers,
  getUserbyId,
  updateUser,
} from "./user.controller";

const router = Router();

router.post("/", createUser);
router.get("/", getAllUsers);

router.get("/:id", getUserbyId);
router.put("/:id", updateUser);

export const userRoute = router;
