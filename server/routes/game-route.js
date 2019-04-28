'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/game-controller');

router.route('/')
  .post(controller.post)
  .get(controller.get);

router.route('/:id')
  .get(controller.getById);

router.post('/:id/round', controller.postRound);

module.exports = router;