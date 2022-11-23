const Modelo = require('../models/Modelo')
const {validationResult} = require('express-validator');

exports.nuevoModelo = async (req, res) => {
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }

    const {nombre_modelo} = req.body;

    let modelo = await Modelo.findOne({nombre_modelo});

    if(modelo) {
        return res.status(400).json({msg: 'El modelo ya esta registrado'})
    }

    modelo = await new Modelo(req.body);

    try {
        await modelo.save();
        res.json({msg: 'Modelo creado correctamente'})
    } catch (error) {
        console.log(error)
    }
}

exports.obtenerModelos = async (req, res) => {
    Modelo.find(function(error, modelos) {
        
        if(error) {
            console.log(error)
        } else {
            res.send(modelos)
        }
    })
}

exports.editarModelo = async (req, res) => {
    const modelo = await Modelo.updateOne({req: req.body},
    {
        $set: {
            id: req.body._id,
            nombre_modelo: req.body.nombre_modelo
        }
    })
    res.send({msg: 'Modelo editado con exito'})
}

exports.eliminarModelo = async (req, res) => {
    const modeloEliminado = await Modelo.deleteOne({req: req.body._id})
    return res.send(modeloEliminado);
}