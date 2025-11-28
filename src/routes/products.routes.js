// src/routes/products.routes.js
import { Router } from "express";
import {
  getProductsController,
  getProductByIdController,
  createProductController,
  deleteProductController,
  updateProductController,
} from "../controllers/products.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

// GET /api/products  -> devuelve todos los productos
router.get("/", getProductsController);

// GET /api/products/:id  -> devuelve un producto por ID
router.get("/:id", getProductByIdController);

// POST /api/products/create  -> crea producto (protegido)
router.post("/create", authMiddleware, createProductController);

// PUT /api/products/:id  -> actualiza producto (protegido)
router.put("/:id", authMiddleware, updateProductController);

// DELETE /api/products/:id  -> elimina producto (protegido)
router.delete("/:id", authMiddleware, deleteProductController);

export const productsRouter = router;
