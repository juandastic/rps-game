'use strict'

const gameRepositoy = require('../repositories/game-repository');
const userRepositoy = require('../repositories/user-repository');


exports.post = async(req, res, next) => {
  try {
    const nicknamePlayer1 = req.body.player1 && req.body.player1.toLowerCase();
    const nicknamePlayer2 = req.body.player2 && req.body.player2.toLowerCase();

    const player1 = await userRepositoy.getCreateUser(nicknamePlayer1);
    const player2 = await userRepositoy.getCreateUser(nicknamePlayer2);

    const game = await gameRepositoy.create({
      player1: player1._id,
      player2: player2._id,
      target: 3
    });
    const players = {
      [player1._id]: player1,
      [player2._id]: player2,
    }
    res.status(200).send({
      game,
      players
    });
  } catch(e) {
    res.status(500).send({error: e});
  }
}

exports.get = async(req, res, next) => {
  try {
    let data = await gameRepositoy.get();
    res.status(200).send(data);
  } catch(e) {
    res.status(500).send({message: 'Error trying to process your request'});
  }
}

exports.getById = async(req, res, next) => {
  try {
    let data = await gameRepositoy.getById(req.params.id);
    res.status(200).send(data);
  } catch(e) {
    res.status(500).send({message: 'Error trying to process your request'});
  }
}
