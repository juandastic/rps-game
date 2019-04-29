'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

const app = express();

app.use(cors());

mongoose.connect(config.CONNECTION_STRING, { useNewUrlParser: true });

mongoose.connection.once('open', function() {
    console.log("MongoDB database connection established successfully on "+ config.CONNECTION_STRING);
})

//load routes
const indexRoute = require('./routes/index-route');
const gameRoute = require('./routes/game-route');
const scoreBoardRoute = require('./routes/score-board-route');

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extentend: false }));

app.use(`/${config.API_PREFIX}/games`, gameRoute);
app.use(`/${config.API_PREFIX}/score-board`, scoreBoardRoute);

//Static Server
app.use(express.static('build'));
app.use('/', indexRoute);

app.listen(config.PORT, function() {
    console.log("Server is running on Port: " + config.PORT);
});