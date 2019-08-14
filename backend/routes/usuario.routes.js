const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuario.controller');

router.get('/', UsuarioController.getUsuarios);
router.get('/:id', UsuarioController.getUsuario);
router.post('/', UsuarioController.insertUsuario);
router.put('/:id', UsuarioController.updateUsuario);
router.delete('/:id', UsuarioController.deleteUsuario);

module.exports = router;