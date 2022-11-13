/*
 Passport项目是一个基于Nodejs的认证中间件。Passport目的只是为了“登陆认证”，
因此，代码干净，易维护，可以方便地集成到其他的应用中。
Web应用一般有2种登陆认证的形式，这些都是passport支持哒！
用户名和密码认证登陆
OAuth认证登陆
https://www.passportjs.org/
*/
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = function (passport) {
  // Local Strategy
  passport.use(new LocalStrategy(function (username, password, done) {
    // 验证用户名
    let query = { username: username };
    User.findOne(query, function (err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: '没有此用户' });
      }

      // 验证密码
      bcrypt.compare(password, user.password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: '密码错误' });
        }
      });
    });
  }));

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
}
