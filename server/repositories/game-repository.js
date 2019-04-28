'use strict'

const Game = require('../models/game')

exports.get = async() => {
    let res = await Game.find({})
    return res
}

exports.getById = async(id) => {
    let res = await Game.findById(id).populate('player1 player2 winner')
    return res
}

exports.create = async(data) => {
    let game = new Game(data)
    await Game.populate(game, 'player1 player2 winner')
    return await game.save()
}
