import {
    getAllProductsModel,
    getProductByIdModel,
    createProductModel,
    deleteProductModel,
    updateProductModel, 
  } from "../models/products.models.js";
  
  // 👉 Traer TODOS los productos
  export const getProductsService = async () => {
    const products = await getAllProductsModel();
    return products;
  };
  
  // 👉 Traer UN producto por ID
  export const getProductByIdService = async (id) => {
    const product = await getProductByIdModel(id);
  
    if (!product) {
      const error = new Error("Producto no encontrado");
      error.statusCode = 404;
      throw error;
    }
  
    return product;
  };
  
  // 👉 Crear producto nuevo
  export const createProductService = async (data) => {
    const { name, price, stock, description = "", category = "" } = data;
  
    if (!name || price === undefined || stock === undefined) {
      const error = new Error("Los campos name, price y stock son obligatorios");
      error.statusCode = 400;
      throw error;
    }
  
    const newProduct = {
      name,
      price,
      stock,
      description,
      category,
      createdAt: new Date(),
    };
  
    const created = await createProductModel(newProduct);
    return created;
  };
  
  // 👉 Eliminar producto
  export const deleteProductService = async (id) => {
    // opcionalmente podrías verificar si existe antes
    await deleteProductModel(id);
  };
  
  // 👉 Actualizar producto
  export const updateProductService = async (id, data) => {
    const { name, price, stock, description = "", category = "" } = data;
  
    if (!name || price === undefined || stock === undefined) {
      const error = new Error("Los campos name, price y stock son obligatorios");
      error.statusCode = 400;
      throw error;
    }
  
    // opcional: verificar que exista
    const existing = await getProductByIdModel(id);
    if (!existing) {
      const error = new Error("Producto no encontrado");
      error.statusCode = 404;
      throw error;
    }
  
    const updatedProduct = {
      name,
      price,
      stock,
      description,
      category,
      updatedAt: new Date(),
    };
  
    const updated = await updateProductModel(id, updatedProduct);
    return updated;
  };