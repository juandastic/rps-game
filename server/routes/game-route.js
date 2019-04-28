'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/game-controller');

router.route('/')
  .post(controller.post);

// router.route('/:id')
//   .get(controller.getById);

module.exports = router;