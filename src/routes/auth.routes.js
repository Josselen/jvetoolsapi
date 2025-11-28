// src/routes/auth.routes.js
import { Router } from "express";
import { login } from "../controllers/auth.controller.js";

const router = Router();

// POST /auth/login  -> recibe credenciales y devuelve Bearer token
router.post("/auth/login", login);

export const authRouter = router;
