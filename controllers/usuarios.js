
const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {
    
    const { q, nombre = 'no name', apikey=123323678, page = 23, limit } = req.query;
    // const query = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit,
        // query
    });
}

const usuariosPost = (req, res = response) => {
    
    // const body = req.body;
    
    // desestructurando 
    const {nombre, edad, ciudad} = req.body;

    res.json({
        msg: 'post API - Controlador',
        nombre,
        ciudad
    });
}

const usuariosPut = (req, res = response) => {
    
    const id = req.params.userId;

    res.json({
        msg: 'put API - Controlador',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPut
}