const express = require('express');
const router = express.Router();
const estadoController = require('../controllers/estadoController');
const {check} = require('express-validator');

router.post('/crear',
    [
        check('nombre_estado', 'El nombre del estado es obligatorio').not().isEmpty()
    ],
    estadoController.nuevoEstado
)
router.get('/todos', estadoController.obtenerEstados);
router.put('/editar', estadoController.editarEstado);
router.delete('/eliminar', estadoController.elminarEstado);

module.exports = router