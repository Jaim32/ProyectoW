const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/', userController.crearUsuario);
router.get('/', userController.obtenerUsuarios);
router.get('/:id', userController.obtenerUsuarioPorId);

module.exports = router;
