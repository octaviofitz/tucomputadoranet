var express = require('express');
var router = express.Router();
const multer= require('multer')
const path= require('path')

const storage= multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'public/images')
    },
        filename: (req,file,callback) => {
        callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
    })
    const upload = multer({
    storage,
    })

const{computadoras, notebooks, agregarProducto, guardarProducto, detalle,eliminar}= require('../controllers/products')

/* GET home page. */
router.get('/computadoras', computadoras)
router.get('/notebooks', notebooks)
router.get('/agregar', agregarProducto)
router.post('/agregar', upload.single('image'), guardarProducto)
router.get('/detalle/:id', detalle)
router.delete('/remove/:id', eliminar)




module.exports = router;
