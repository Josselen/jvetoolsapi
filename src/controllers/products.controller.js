// src/controllers/products.controller.js

import {
    getProductsService,
    getProductByIdService,
    createProductService,
    deleteProductService,
    updateProductService
  } from "../services/products.service.js";
  
  // GET /api/products
  export const getProductsController = async (req, res, next) => {
    try {
      const products = await getProductsService();
      res.json(products);
    } catch (error) {
      next(error);
    }
  };
  
  // GET /api/products/:id
  export const getProductByIdController = async (req, res, next) => {
    try {
      const product = await getProductByIdService(req.params.id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  };
  
  // POST /api/products
  export const createProductController = async (req, res, next) => {
    try {
      console.log("👉 Body recibido en createProductController:", req.body);
  
      const product = await createProductService(req.body);
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  };
  
  // DELETE /api/products/:id
  export const deleteProductController = async (req, res, next) => {
    try {
      await deleteProductService(req.params.id);
      res.json({ message: "Producto eliminado" });
    } catch (error) {
      next(error);
    }
  };

  // PUT /api/products/:id 
  export const updateProductController = async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log('👉 Body recibido en updateProductController:', req.body);
  
      const updated = await updateProductService(id, req.body);
      res.json(updated);
    } catch (error) {
      next(error);
    }
  };
  