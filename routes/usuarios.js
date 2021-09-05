
const {Router} = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);

router.put('/:userId', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);



module.exports = router;