var express = require('express');
var router = express.Router();

var UserController = require('../controller/userController')

/* GET users listing. */
router.get('/', UserController.index);
router.get('/show', UserController.show);
router.post('/store', UserController.store);
router.post('/update', UserController.update);
router.post('/destroy', UserController.destroy);

module.exports = router;
