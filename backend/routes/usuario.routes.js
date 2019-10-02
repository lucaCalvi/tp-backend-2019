const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuario.controller');
const TareaController = require('../controllers/tarea.controller');

router.get('/', UsuarioController.getUsuarios);
router.get('/:id', UsuarioController.getUsuario);
router.post('/', UsuarioController.insertUsuario);
router.put('/:id', UsuarioController.updateUsuario);
router.delete('/:id', UsuarioController.deleteUsuario);
router.get('/:id/tareas', TareaController.getTareas);
router.get('/:id/tareas/:idTarea', TareaController.getTarea)

module.exports = router;