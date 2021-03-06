'use strict';

var express = require('express');
var controller = require('./intensitasruang.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/query', controller.findQuery);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
