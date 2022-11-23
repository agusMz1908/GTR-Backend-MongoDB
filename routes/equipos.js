const express = require('express');
const router = express.Router();
const equipoController = require('../controllers/equipoController');
const {check} = require('express-validator');

router.post('/crear',
    [
        check('serial', 'El serial es obligatorio').not().isEmpty(),
        check('numero_partida', 'El part number es obligatorio').not().isEmpty(),
        check('modelo', 'El modelo es obligatorio').not().isEmpty(),
        check('estado', 'El estado es obligatorio').not().isEmpty(),
        check('propietario', 'El propietario es obligatorio').not().isEmpty(),
        check('ubicacion', 'La ubicacion es obligatoria').not().isEmpty(),
    ],
    equipoController.nuevoEquipo
);

router.get('/todos', equipoController.obtenerEquipos);
router.put('/editar', equipoController.editarEquipo);
router.delete('/eliminar', equipoController.elminarEquipo);

module.exports = router;

