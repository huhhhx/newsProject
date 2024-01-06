const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
//user模型 ====>users集合
const UserType = {
  username: String,
  password: String,
  gender: Number,
  introduction: String,
  avatar: String,
  role: Number,
};
const UserModel = mongoose.model('user', new Scheme(UserType));

module.exports = UserModel;
