const express = require('express');
const path = require('path');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
//dotenv是零依赖模块，可将环境变量从.env文件加载到中process.env。
const config = require('dotenv').config();
const connectDB = require('./config/database');


//创建数据库链接

connectDB();

// 初始化express框架
const app = express();

// 导入文章模型
let { Article } = require('./models/article');

// 设置模板引擎，相关参数
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
// use 注册，挂载中间件 Body Parser Middleware 
// 解析 application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

//Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等。
// 注册公共文件夹路径
app.use(express.static(path.join(__dirname, 'public')));

//中间件可以执行任何代码，修改请求和响应对象，也可以终止请求响应循环。
// use 概念
// 直白的说use就是给你的当前路径的请求加上中间件，假如这个路径的参数没有传，默认的就是"/"，
// 也就是说所有的请求都会走这个中间件处理。
// 中间件use next用法 https://www.jianshu.com/p/68e3acb03506
// Express Session Middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

// Passport Config
require('./middleware/passport')(passport);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

// 主页路由配置
app.get('/', function (req, res) {
  Article.find({}, function (err, articles) {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {
        title: '内容列表',
        articles: articles
      });
    }
  });
});

// 其他路由配置
let articles = require('./routes/articles');
let users = require('./routes/users');
app.use('/articles', articles);
app.use('/users', users);

// 开启服务器监控
app.listen(3000, function () {
  console.log('Server started on port 3000...');
});
