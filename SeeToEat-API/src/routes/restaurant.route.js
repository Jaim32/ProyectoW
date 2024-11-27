import express from 'express';
import restaurantController from '../controllers/restaurant.controller.js';

const { crearRestaurante, obtenerRestaurantes, obtenerRestaurantePorId, agregarComentario, agregarMenuItem } = restaurantController;

import { authenticateToken } from '../middlewares/auth.js';


const router = express.Router();

router.post('/', authenticateToken, crearRestaurante);
router.get('/', obtenerRestaurantes);
router.get('/:id', obtenerRestaurantePorId);
router.post('/:id/comentarios', authenticateToken, agregarComentario);
router.post('/:id/menu', authenticateToken, agregarMenuItem);

export default router;
