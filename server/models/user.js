'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  nickname: {
    type: String,
    required: true
  }
}, {
  toObject: {
      virtuals: true
  },
  toJSON: {
      virtuals: true
  }
});

schema.virtual('games', {
  ref: 'Game', // The model to use
  localField: '_id', // Find people where `localField`
  foreignField: 'winner', // is equal to `foreignField`
});

module.exports = mongoose.model('User', schema);