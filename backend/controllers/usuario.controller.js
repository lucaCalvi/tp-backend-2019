const Usuario = require('../models/usuario');
UsuarioController = {};

UsuarioController.getUsuarios = (req, res) => {
    Usuario.find()
      .then(usuarios => {
          res.json(usuarios);
      })
      .catch(err => {
          res.json(err);
          console.log('Error ', err);
      });
}

UsuarioController.getUsuario = (req, res) => {
    const id = req.params.id;
    Usuario.findById(id)
      .then(usuario => {
          res.json(usuario);
      })
      .catch(err => {
          res.json(err);
          console.log('Error ', err);
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

    usuario.save()
      .then(() => {
          res.json('Usuario creado exitosamente');
          console.log('Usuario creado exitosamente');
      })
      .catch(err => {
          res.json(err);
          console.log('Error ', err);
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

    Usuario.findByIdAndUpdate(id, {$set: usuario})
      .then(() => {
          res.json('Usuario actualizado exitosamente');
          console.log('Usuario actualizado exitosamente');
      })
      .catch(err => {
          res.json(err);
          console.log('Error ', err);
      });
}

UsuarioController.deleteUsuario = (req, res) => {
    const id = req.params.id;
    Usuario.findByIdAndRemove(id)
      .then(() => {
          res.json('Usuario eliminado exitosamente');
          console.log('Usuario eliminado exitosamente');
      })
      .catch(err => {
          res.json(err);
          console.log('Error ', err);
      })
}

module.exports = UsuarioController;