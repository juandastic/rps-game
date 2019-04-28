'use strict'

const gameRepositoy = require('../repositories/game-repository');
const userRepositoy = require('../repositories/user-repository');

const moves = {
  'ROCK': 0,
  'PAPER': 1,
  'SCISSORS': 2
};
const validateMovesWinner = (move_player1, move_player2) => {
  const processResult = (3 + moves[move_player2] - moves[move_player1]) % 3;
  let result;
  if (!processResult) {
    result = 'TIE'
  } else if(1 === processResult) {
    result = 'player2'
  } else {
    result = 'player1'
  }
  return result;
}

exports.post = async(req, res, next) => {
  try {
    const nicknamePlayer1 = req.body.player1 && req.body.player1.toLowerCase()
    const nicknamePlayer2 = req.body.player2 && req.body.player2.toLowerCase()

    const player1 = await userRepositoy.getCreateUser(nicknamePlayer1)
    const player2 = await userRepositoy.getCreateUser(nicknamePlayer2)

    const game = await gameRepositoy.create({
      player1: player1._id,
      player2: player2._id,
      target: 3
    })

    res.status(200).send(game)
  } catch(e) {
    res.status(500).send({error: e});
  }
}

exports.get = async(req, res, next) => {
  try {
    let data = await gameRepositoy.get();
    res.status(200).send(data);
  } catch(e) {
    res.status(500).send({message: 'Error trying to process your request'})
  }
}

exports.getById = async(req, res, next) => {
  try {
    let data = await gameRepositoy.getById(req.params.id)
    res.status(200).send(data)
  } catch(e) {
    res.status(500).send({message: 'Error trying to process your request'})
  }
}

exports.postRound = async(req, res, next) => {
  try {
    const game = await gameRepositoy.getById(req.params.id)
    const move_player1 = req.body.move_player1
    const move_player2 = req.body.move_player2
    const result = validateMovesWinner(move_player1, move_player2);

    const round = {
      move_player1: move_player1,
      move_player2: move_player2,
      result: result === 'TIE' ? result : 'WINNER'
    }

    if (result !== 'TIE') {
      round.winner = result
    }

    game.rounds.push(round);

    const gameUpdated = await game.save();

    let player1_rounds = 0;
    let player2_rounds = 0;

    gameUpdated.rounds.map((round) => {
      if (round.winner === 'player1') {
        player1_rounds++
      } else if (round.winner === 'player2') {
        player2_rounds++
      }
    })

    if (player1_rounds === gameUpdated.target) {
      gameUpdated.winner = gameUpdated.player1
    } else if (player2_rounds === gameUpdated.target) {
      gameUpdated.winner = gameUpdated.player2
    }

    if (gameUpdated.winner) {
      gameUpdated.save();
    }

    res.status(200).send(gameUpdated)
  } catch(e) {
    res.status(500).send({message: e})
  }
}
