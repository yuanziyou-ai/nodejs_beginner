const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models/user');

// 注册跳转
router.get('/register', async (req, res) => {
  res.render('register');
});

// 注册验证
router.post('/register', async (req, res) => {

  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const password2 = req.body.password2;

  req.checkBody('name', '用户名必须填写').notEmpty();
  req.checkBody('email', '邮箱必须填写').notEmpty();
  req.checkBody('email', '邮箱需要规范填写').isEmail();
  req.checkBody('username', '昵称必须填写').notEmpty();
  req.checkBody('password', '密码必须填写').notEmpty();
  req.checkBody('password2', '密码不匹配').equals(req.body.password);

  let errors = await req.getValidationResult();

  if (!errors.isEmpty()) {
    let array = []
    errors.array().forEach(e => array.push(e.msg))
    res.render('register', { errors: errors.array() });
    // res.json({ mssg: array })
  }
  else {
    const salt = await bcrypt.genSalt(10);
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, salt)
    });
    newUser.save();
    req.flash('success', '注册成功，请登录进入系统');
    res.redirect('/users/login');
  }
});


// 跳转到登录页面
router.get('/login', async (req, res) => {
  res.render('login');
});

// 授权验证
router.post('/login', async (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// 退出注销
router.get('/logout', async (req, res) => {
  req.logout();
  req.flash('success', '你已经注销退出');
  res.redirect('/users/login');
});

module.exports = router;
