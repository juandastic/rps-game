'use strict'

const User = require('../models/user');

exports.getCreateUser = async (nickname) => {
  let user = await User.findOne({'nickname': nickname});

  if (!user) {
    user = await this.create({
      nickname: nickname
    })
  }

  return user;
}

exports.get = async() => {
  let res = await User.find({});
  return res;
}

exports.getById = async(id) => {
  let res = await User.findById(id);
  return res;
}

exports.delete = async(id) => {
  let res = await User.findById(id);
  res.delete();
  return res;
}

exports.create = async(data) => {
    let user = new User(data);
    return await user.save();
}