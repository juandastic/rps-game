'use strict'

const Game = require('../models/game');

exports.get = async() => {
    let res = await Game.find({});
    return res;
}

exports.getById = async(id) => {
    let res = await Game.findById(id);
    return res;
}

exports.delete = async(id) => {
    let res = await Game.findById(id);
    res.delete();
    return res;
}

exports.create = async(data) => {
    let game = new Game(data);
    return await game.save();
}