import { Router } from "express";
import { creaqteProfile } from "./profile.controller";

const router = Router();

router.post("/", creaqteProfile);

export const profileRoute = router;
