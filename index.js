// index.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { productsRouter } from './src/routes/products.routes.js';
import { authRouter } from './src/routes/auth.routes.js';
import { notFoundHandler } from './src/middlewares/not-found.middleware.js';
import { errorHandler } from './src/middlewares/error-handler.middleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(cors());
app.use(bodyParser.json());

// 🔐 Rutas de auth -> /auth/login
app.use('/', authRouter);

// 🛒 Rutas de productos -> /api/products/...
app.use('/api/products', productsRouter);

// Ruta simple para comprobar que el server está vivo
app.get('/', (req, res) => {
  res.send('API JVE Tools OK');
});

// 404 para rutas desconocidas
app.use(notFoundHandler);

// Manejo de errores 400 / 500 / etc
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
