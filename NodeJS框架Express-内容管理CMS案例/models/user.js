const mongoose = require('mongoose');
//versionKey是首次由Mongoose创build时在每个文档上设置的属性。
//此文档属性的名称是可configuration的。 默认是__v 。
// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', UserSchema);
module.exports.User = User;