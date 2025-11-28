// src/services/auth.service.js

// Credenciales fijas que dijo tu profe (las mismas para todos)
const VALID_EMAIL = 'test@gmail.com';
const VALID_PASSWORD = '123456';

export const findUserByEmailAndPassword = async (email, password) => {
  if (email === VALID_EMAIL && password === VALID_PASSWORD) {
    return {
      id: '123',
      email,
      role: 'admin',
      name: 'Test User',
    };
  }

  return null;
};
