const express = require('express');
const router = express.Router();
const modeloController = require('../controllers/modeloController')
const {check} = require('express-validator');

router.post('/crear',
    [
        check('nombre_modelo', 'El nombre del modelo es obligatorio').not().isEmpty()
    ],
    modeloController.nuevoModelo
)

router.get('/todos', modeloController.obtenerModelos);
router.put('/editar', modeloController.editarModelo);
router.delete('/eliminar', modeloController.eliminarModelo);

module.exports = router;