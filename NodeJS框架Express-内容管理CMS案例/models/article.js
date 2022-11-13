//Mongoose 是设计用于异步环境的 MongoDB 对象模型工具，支持 promises 和 callbacks。
//Mongoose为模型提供了一种直接的，基于scheme结构去定义你的数据模型。它内置数据验证， 查询构建，业务逻辑钩子等，开箱即用。
//http://www.mongoosejs.net/

const mongoose = require('mongoose');

// Article Schema
const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});
const Article = mongoose.model('Article', articleSchema);
module.exports.Article = Article;
