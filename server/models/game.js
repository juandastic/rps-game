'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Round Schema
const roundSchema = new Schema({
  move_player1: {
    type: String,
    required: true,
  },
  move_player2: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    enum : ['WINNER','TIE'],
    default: 'TIE'
  },
  winner: {
    type: String,
    enum : ['player1','player2']
  }
})

//Game Schema
const schema = new Schema({
  player1: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
  },
  player2: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
  },
  target: {
    type: Number,
    required: true,
  },
  rounds: [roundSchema],
  winner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  }
});

module.exports = mongoose.model('Game', schema);