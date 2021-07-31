var express = require('express');
var router = express.Router();

const{computadoras, notebooks, agregarProducto, guardarProducto}= require('../controllers/products')

/* GET home page. */
router.get('/computadoras', computadoras)
router.get('/notebooks', notebooks)
router.get('/agregar', agregarProducto)
router.post('/agregar', guardarProducto)




module.exports = router;
