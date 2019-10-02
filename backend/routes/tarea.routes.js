const express = require('express');
const router = express.Router();
const TareaController = require('../controllers/tarea.controller');

router.get('/', TareaController.getTareas);
router.get('/:idTarea', TareaController.getTarea);

module.exports = router;