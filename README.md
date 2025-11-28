JVE Tools API

API REST creada para la gestión de productos de la tienda JVE Tools.
Incluye autenticación con JWT, protección de rutas, conexión a Firebase Firestore y manejo completo de errores.

🚀 Tecnologías utilizadas

Node.js + Express

Firebase Firestore

JWT (jsonwebtoken)

CORS

body-parser

dotenv

ESModules (type: module)

⚙️ Instalación y configuración
1. Clonar el repositorio
git clone https://github.com/tuusuario/jve-tools-api.git
cd jve-tools-api

2. Instalar dependencias
npm install

Dependencias requeridas:

express

cors

body-parser

dotenv

firebase

jsonwebtoken

3. Configurar variables de entorno

Crear archivo .env en la raíz del proyecto:
PORT=3000
JWT_SECRET=queridavenus
JWT_EXPIRES_IN=1d

4. Scripts disponibles
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}

Para correr el proyecto en desarrollo:
npm run dev

🔥 Endpoints de la API
🔐 Autenticación
POST /auth/login

Recibe email y contraseña en el body y devuelve un Bearer Token.

Request:
{
  "email": "test@gmail.com",
  "password": "123456"
}

Response:
{
  "token": "<jwt_token>"
}
Este token se utiliza para acceder a rutas protegidas.

🛒 Rutas de Productos

Base URL:
/api/products

➤ GET /api/products

Devuelve todos los productos.

➤ GET /api/products/:id

Devuelve un producto por ID.

➤ POST /api/products/create (protegida)

Requiere:
Authorization: Bearer <token>

Body:
{
  "name": "Producto X",
  "price": 13000,
  "stock": 10,
  "description": "Descripción del producto",
  "category": "Categoría"
}

➤ PUT /api/products/:id (protegida)

Actualiza un producto existente.

➤ DELETE /api/products/:id (protegida)

Elimina un producto por ID.

⚠️ Manejo de errores
La API implementa manejo estandarizado de errores:
| Código | Situación                          |
| ------ | ---------------------------------- |
| 400    | Datos inválidos o campos faltantes |
| 401    | No se envió token                  |
| 403    | Token inválido o expirado          |
| 404    | Ruta o recurso no encontrado       |
| 500    | Error interno del servidor         |

Ejemplo:
{
  "error": "Producto no encontrado"
}

🔥 Autenticación (JWT)

Login genera un JWT firmado:
jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: '1d' })

Las rutas protegidas usan authMiddleware:
Authorization: Bearer <token>

🔥 Conexión con Firebase Firestore

firebase.js inicializa la app de Firebase

products.models.js usa Firestore para:

Crear documentos

Obtener uno/muchos productos

Actualizar

Eliminar

La API utiliza Firestore como base de datos remota en la nube.

📬 Postman Collection (para pruebas)

Incluye:

Login

Crear producto

Actualizar producto

Obtener productos

Eliminar productos

👩🏻‍💻 Autora

Joselen González
Proyecto Final — Certificación Backend Node.js

