const Equipo = require('../models/Equipo');
const {validationResult} = require('express-validator');

exports.nuevoEquipo = async (req, res) => {

    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }

    //Verificar si el equipo existe
    const {serial} = req.body;

    let equipo = await Equipo.findOne({serial});

    if(equipo) {
        return res.status(400).json({msg: 'El quipo ya existe en el sistema'})
    }

    //Crear un equipo
    equipo = await new Equipo(req.body);

    try {
        await equipo.save();
        res.send({msg: 'Equipo ingresado correctamente'})
    } catch (error) {
        console.log(error)
    }
}

exports.obtenerEquipos = async (req, res) => {
    Equipo.find(function(error, equipos) {
        if(error) {
            res.send(error);
            console.log(error);
        } else {
            res.send(equipos)
        }
    })
}

exports.editarEquipo = async (req, res) => {
    const equipo = await Equipo.updateOne({req: req.body},
    {
        $set: {
            id:req.body._id,
            serial: req.body.serial,
            numero_partida: req.body.numero_partida,
            modelo: req.body.modelo,
            estado: req.body.estado,
            propietario: req.body.propietario,
            ubicacion: req.body.ubicacion,
            observaciones: req.body.observaciones

        }
    })
    res.json({msg: 'Equipo modificado con exito'})
}

exports.elminarEquipo = async (req, res) => {
    const equipoEliminado = await Equipo.deleteOne({req: req.body})
    //return res.send(equipoEliminado);
    return res.send({msg: 'Equipo eliminado con exito'})
}

