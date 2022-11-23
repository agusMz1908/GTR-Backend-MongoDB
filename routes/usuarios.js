const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')
const {check} = require('express-validator');

router.post('/crear', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password debe tener por lo menos 10 caracteres y no puede estar vacio').not().isEmpty().isLength({min: 10})
    ],
    usuarioController.nuevoUsuario
);

router.get('/todos', usuarioController.obtenerUsuarios);
router.put('/editar', usuarioController.editarUsuario);
router.delete('/eliminar', usuarioController.eliminarUsuario);

module.exports = router;