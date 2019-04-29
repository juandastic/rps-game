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

exports.playRound = async(game_id, move_player1, move_player2) => {
    //Get the current game
    const game = await this.getById(game_id)
    //Process the players movements to get the Winner
    const result = validateMovesWinner(move_player1, move_player2);

    //Create the round object based on the movements result
    const round = {
      move_player1: move_player1,
      move_player2: move_player2,
      result: result === 'TIE' ? result : 'WINNER'
    }

    if (result !== 'TIE') {
      round.winner = result
    }

    //Add the round to the current game
    game.rounds.push(round);
    const gameUpdated = await game.save();

    //Check if there is any winner with this move
    let player1_rounds = 0;
    let player2_rounds = 0;

    gameUpdated.rounds.map((round) => {
      if (round.winner === 'player1') {
        player1_rounds++
      } else if (round.winner === 'player2') {
        player2_rounds++
      }
    })
    //If there is any winner update the game to save it
    if (player1_rounds === gameUpdated.target) {
      gameUpdated.winner = gameUpdated.player1
    } else if (player2_rounds === gameUpdated.target) {
      gameUpdated.winner = gameUpdated.player2
    }
    if (gameUpdated.winner) {
      gameUpdated.save();
    }

    return gameUpdated
}
