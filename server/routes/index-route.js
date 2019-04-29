'use strict'

const express = require('express');
const path = require('path');
const config = require('../config');
const router = express.Router();

router.get('*', function (req, res) {
    const index = path.join(__dirname, config.DIR_STATIC, 'index.html');
    res.sendFile(index);
});

module.exports = router;