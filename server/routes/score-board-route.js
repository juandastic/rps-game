'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/score-board-controller');

router.route('/')
  .get(controller.get);

module.exports = router;