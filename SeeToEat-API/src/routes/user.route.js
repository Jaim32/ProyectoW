import { crearUsuario, obtenerUsuarios, obtenerUsuarioPorId, eliminarUsuario, iniciarSesion } from '../controllers/user.controller.js';
import { authenticateToken } from '../middlewares/auth.js';
import express from 'express';

const router = express.Router();

// Ruta para crear un nuevo usuario (pública)
router.post('/', crearUsuario);

// Ruta para iniciar sesión (pública)
router.post('/login', iniciarSesion);

// Ruta para obtener todos los usuarios (solo para usuarios autenticados)
router.get('/', authenticateToken, obtenerUsuarios);

// Ruta para obtener un usuario por ID (solo para usuarios autenticados)
router.get('/:id', authenticateToken, obtenerUsuarioPorId);

// Ruta para eliminar un usuario (solo para usuarios autenticados)
router.delete('/:id', authenticateToken, eliminarUsuario);

export default router;
