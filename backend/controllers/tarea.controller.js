const Tarea = require('../models/tarea');
TareaController = {};

TareaController.getTareas = (req, res) => {
    const id = req.params.id;
    Tarea.find({ID_asignado: id})
      .then(tareas => {
          res.status(200).json(tareas);
      })
      .catch(err => {
          res.status(500).json({error: err.message});
      });
}

TareaController.getTarea = (req, res) => {
    const idTarea = req.params.idTarea;
    Tarea.findById(idTarea)
      .then(tarea => {
          res.status(200).json(tarea);
      })
      .catch(err => {
          res.status(500).json({error: err.message});
      });
}

module.exports = TareaController;