const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');

exports.nuevoUsuario = async (req, res) => {

    //Mostrar mensajes de error de express validator
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }
    //Verificar si el usuario ya esta registrado
    const {nombre, password} = req.body;

    let usuario = await Usuario.findOne({nombre})
    
    if(usuario) {
        return res.status(400).json({msg: 'El usuario ya esta registrado'})
    }

    //Crear un usuario nuevo
    usuario = await new Usuario(req.body);

    //Hashear el password
    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(password, salt);

    try {
        await usuario.save();
        res.json({msg: 'Usuario creado correctamente'})  
    } catch (error) {
        console.log(error)
    }
}

exports.obtenerUsuarios = async (req, res) => {
    Usuario.find(function(error, data) {
        if(error) {
            console.log(error);
        } else {
            res.send(data)
        }
    })
}

exports.editarUsuario = async (req, res) => {
    const usuario = await Usuario.updateOne({req: req.body},
    {
        $set: {
            id: req.body._id,
            nombre: req.body.nombre,
        }
    })
    res.send({msg: 'Usuario editado con exito'})
}

exports.eliminarUsuario = async (req, res) => {
    const usuarioEliminado = await Usuario.deleteOne({req: req.body._id})
    //res.send(usuarioEliminado);
    return res.send({msg: 'Usuario eliminado con exito'})
}