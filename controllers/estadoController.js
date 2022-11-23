const Estado = require('../models/Estado');
const {validationResult} = require('express-validator');

exports.nuevoEstado = async (req, res) => {

    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }

    const {nombre_estado} = req.body

    let estado = await Estado.findOne({nombre_estado});

    if(estado) {
        return res.status(400).json({msg: 'El estado ya existe'})
    }

    estado = await new Estado(req.body);

    try {
        await estado.save();
        res.send({msg: 'Modelo ingresado correctamente'})
    } catch (error) {
        console.log(error);
    }
}

exports.obtenerEstados = async (req, res) => {
    Estado.find(function(error, estados) {
        if(error) {
            res.send(error);
            console.log(error);
        } else {
            res.send(estados)
        }
    })
}

exports.editarEstado = async (req, res) => {
    const estado = await Estado.updateOne({req: req.body},
    {
        $set: {
            id: req.body._id,
            nombre_estado: req.body.nombre_estado
        }
    })
    res.json({msg: 'Equipo modificado con exito'})
}

exports.elminarEstado = async (req, res) => {
    const estadoEliminado = await Estado.deleteOne({req: req.body})
    //return res.send(estadoEliminado);
    return res.send({msg: 'Estado eliminado con exito'})
}