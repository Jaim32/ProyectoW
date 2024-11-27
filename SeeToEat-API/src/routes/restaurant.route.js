const express = require('express');
const restaurantController = require('../controllers/restaurant.controller');

const router = express.Router();

router.post('/', restaurantController.crearRestaurante);
router.get('/', restaurantController.obtenerRestaurantes);
router.get('/:id', restaurantController.obtenerRestaurantePorId);

module.exports = router;
