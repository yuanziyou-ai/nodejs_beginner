const express = require('express');
const router = express.Router();
const { Article } = require('../models/article');
const { User } = require('../models/user');

// 添加 Add 跳转路由
router.get('/add', ensureAuthenticated, async (req, res) => {
  res.render('add_article', {
    title: '请添加内容'
  });
});

// 添加提交内容路由
router.post('/add', async (req, res) => {
  try {
    req.checkBody('title', '请必须填写标题').notEmpty();
    req.checkBody('body', '内容描述没有填写').notEmpty();

    let errors = req.validationErrors();

    if (errors) {
      res.render('add_article', {
        title: '添加内容',
        errors: errors
      });
    } else {
      let article = await Article.create({
        title: req.body.title,
        author: req.user._id,
        body: req.body.body,
      });
      article.save();
      req.flash('success', '内容添加成功');
      res.redirect('/');
    }
  } catch (e) {
    res.send(e);
  }

});

// 获取编辑页面
router.get('/edit/:id', ensureAuthenticated, async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article.author != req.user._id) {
      req.flash('danger', '请登录授权');
      return res.redirect('/');
    }
    res.render('edit_article', {
      title: '编辑内容',
      article: article,
      authorName: req.user.name
    });

  } catch (e) {
    res.send(e);
  }

});

// 更新内容并提交
router.post('/edit/:id', async (req, res) => {
  try {
    const article = {
      title: req.body.title,
      author: req.user._id,
      body: req.body.body
    };

    let query = { _id: req.params.id }

    const update = await Article.updateOne(query, article);
    if (update) {
      req.flash('success', '内容更新成功');
      res.redirect('/');
    } return;

  } catch (e) {
    res.send(e);
  }

});

// 删除内容
router.delete('/:id', async (req, res) => {

  try {
    if (!req.user._id) {
      res.status(500).send();
    }
    let query = { _id: req.params.id }
    const article = await Article.findById(req.params.id);

    if (article.author != req.user._id) {
      res.status(500).send();
    } else {
      remove = await Article.findByIdAndRemove(query);
      if (remove) {
        res.send('Success');
      }
    };
  } catch (e) {
    res.send(e);
  }

});



// 根据ID获取单个内容
router.get('/:id', async (req, res) => {

  const article = await Article.findById(req.params.id);
  const user = await User.findById(article.author);
  if (user) {
    res.render('article', {
      article: article,
      author: user.name
    });
  }
});

// 用户访问控制授权
function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('danger', '请先登录');
    res.redirect('/users/login');
  }
}

module.exports = router;
