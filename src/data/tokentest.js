// src/data/tokentest.js
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'mi_super_secreto_re_largo';

export const generateToken = (user) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) return reject(err);
        resolve(token);
      }
    );
  });
};
