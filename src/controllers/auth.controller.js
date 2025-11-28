// src/controllers/auth.controller.js
import { findUserByEmailAndPassword } from '../services/auth.service.js';
import { generateToken } from '../data/tokentest.js';

export const login = async (req, res) => {
  try {
    console.log('Body recibido en /api/login:', req.body);

    const { email, password } = req.body;

    const user = await findUserByEmailAndPassword(email, password);

    if (!user) {
      return res.sendStatus(401); // credenciales inválidas
    }

    const token = await generateToken(user);

    return res.json({ token });
  } catch (error) {
    console.error('Error en login:', error);
    return res.sendStatus(500);
  }
};
