const Usuario = require('../models/usuario');
const Tarea = require('../models/tarea');
UsuarioController = {};

UsuarioController.getUsuarios = (req, res) => {
    Usuario.find()
      .then(usuarios => {
          res.status(200).json(usuarios);
      })
      .catch(err => {
          res.status(500).json({error: err.message});
      });
}

UsuarioController.getUsuario = (req, res) => {
    const id = req.params.id;
    Usuario.findById(id)
      .then(usuario => {
          res.status(200).json(usuario);
      })
      .catch(err => {
          res.status(500).json({error: err.message});
      });
}

UsuarioController.insertUsuario = (req, res) => {
    const usuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        nombreUsuario: req.body.nombreUsuario,
        contraseña: req.body.contraseña,
        etiqueta: req.body.etiqueta,
        informacion: req.body.informacion,
        contactos: req.body.contactos
    });

    Usuario.find()
        .then(usuarios => {
            usuarios.forEach(user => {
                if(user.email == usuario.email) {
                    status = 400;
                    return Promise.reject("El email ingresado ya está registrado");
                };
                if(user.nombreUsuario == usuario.nombreUsuario) {
                    status = 400;
                    return Promise.reject("El nombre de usuario ingresado ya existe");
                };
            });
            return Promise.resolve();
        })
        .then(() => {
            usuario.save(() => {
                res.status(200).json({id: usuario._id});
            });
        })
        .catch(err => {
            res.status(status || 500).json({error: err.message});
        });
}

UsuarioController.updateUsuario = (req, res) => {
    const id = req.params.id;
    const usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        nombreUsuario: req.body.nombreUsuario,
        contraseña: req.body.contraseña,
        etiqueta: req.body.etiqueta,
        informacion: req.body.informacion,
        contactos: req.body.contactos
    };

    Usuario.find()
        .then(usuarios => {
            usuarios.forEach(user => {
                if(id != user._id) {
                    if(user.email == usuario.email) {
                        status = 400;
                        return Promise.reject("El email ingresado ya está registrado");
                    };
                    if(user.nombreUsuario == usuario.nombreUsuario) {
                        status = 400;
                        return Promise.reject("El nombre de usuario ingresado ya existe");
                    };
                };
            });
            return Promise.resolve();
        })
        .then(() => {
            Usuario.findByIdAndUpdate(id, {$set: usuario}, () => {
                res.status(200).json({id: id});
            });
        })
        .catch(err => {
            res.status(status || 500).json({error: err.message});
        });
}

UsuarioController.deleteUsuario = (req, res) => {
    const id = req.params.id;
    Usuario.findByIdAndRemove(id)
        .then(() => {
            Tarea.deleteMany({id_asignador: id}, () => {
                return Promise.resolve();
            });
        }) //VER QUE ELIMINE ASIGNADO, SACAR CONTADOR, PONER "VACIO" EN CAMPOS VACIOS FRONT
        .then(() => {
            Tarea.find({id_asignado: id}, (err, tareas) => {
                tareas.forEach((tarea) => {
                    array = tarea.id_asignado;
                    let i = array.findIndex((value) => {
                        value = id;
                    });
                    array.splice(i, 1);
                });
            });
        })
        .then(() => {
            res.status(200).json({id: id});
        })
        .catch(err => {
            res.status(500).json({error: err.message});
        });
}

module.exports = UsuarioController;