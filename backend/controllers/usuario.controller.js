const Usuario = require('../models/usuario');
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
        informacion: req.body.informacion
    });

    Usuario.find()
      .then(usuarios => {
            usuarios.forEach(user => {
                if(user.email == usuario.email) {
                    status = 400;
                    throw new Error("El email ingresado ya está registrado");
                };
                if(user.nombreUsuario == usuario.nombreUsuario) {
                    status = 400;
                    throw new Error("El nombre de usuario ingresado ya existe");
                };
            });
            usuario.save()
              .then(() => {
                    res.status(200).json({id: usuario._id});
              })
              .catch(err => {
                    res.status(500).json({error: err.message});
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
        informacion: req.body.informacion
    }

    Usuario.find()
      .then(usuarios => {
            usuarios.forEach(user => {
                if(id != user._id) {
                    if(user.email == usuario.email) {
                        status = 400;
                        throw new Error("El email ingresado ya está registrado");
                    };
                    if(user.nombreUsuario == usuario.nombreUsuario) {
                        status = 400;
                        throw new Error("El nombre de usuario ingresado ya existe");
                    };
                };
            });
            Usuario.findByIdAndUpdate(id, {$set: usuario})
              .then(() => {
                    res.status(200).json({id: id});
              })
              .catch(err => {
                    res.status(500).json({error: err.message});
              });
            })
      .catch(err => {
          res.status(500).json({error: err.message});
      });
}

UsuarioController.deleteUsuario = (req, res) => {
    const id = req.params.id;
    Usuario.findByIdAndRemove(id)
      .then(() => {
          res.status(200).json({id: id});
      })
      .catch(err => {
          res.status(500).json({error: err.message});
      })
}

module.exports = UsuarioController;