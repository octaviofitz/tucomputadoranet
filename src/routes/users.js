var express = require('express');
var router = express.Router();

const{login,registro} = require('../controllers/users')

/* GET users listing. */
router.get('/login', login)
router.get('/registro', registro)


module.exports = router;
