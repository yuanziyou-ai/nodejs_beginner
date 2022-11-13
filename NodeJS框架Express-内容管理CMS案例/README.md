# Express 入门实战案例

简单的内容管理系统实战案例，适合入门学习Node.js,Express 框架

## Technologies
* Node.js https://nodejs.org/zh-cn/
* 
* Express 
基于 Node.js 平台，快速、开放、极简的 Web 开发框架 https://www.expressjs.com.cn/
* Express Messages, Session, Connect Flash & Validation

Messages 是Express一个模块，提供了快速的通知提示的展现

Session 是另一种记录客户状态的机制，不同的是 Cookie 保存在客户端浏览器中，而 session 保存在服务器上。

connect-flash是nodejs中的一个模块，flash是一个暂存器，而且暂存器里面的值使用过一次便被清空，适合用来做网站的提示信息。

express-validation是一个中间件，它验证请求的body, params, query, headers 和 cookies ，并且如果任何配置的验证规则失败,返回一个错误的响应

* MongoDB & Mongoose 
Mongoose为模型提供了一种直接的，基于scheme结构去定义你的数据模型。它内置数据验证， 查询构建，业务逻辑钩子等，开箱即用。http://www.mongoosejs.net/

* Pug Templating 
  Pug是一个高性能模板引擎 https://pugjs.org/api/getting-started.html

* Passport.js Authentication 
Passport是Node.js的身份验证中间件。 http://www.passportjs.org/

* BCrypt Hashing 
加密插件bcryptjs一般是用来给密码加密的 https://www.npmjs.com/package/bcryptjs


### Installation

Install the dependencies

```sh
$ npm install
bower install jquery
bower install --save --allow-root bootstrap
```
Run app

```sh
$ npm start
```


1  看页面，了解功能，了解需求和页面设计
2  学习页面模板引擎的代码
3  学习路由代码；学习模型代码
4 学习config,中间件等代码实现的功能
5 最后我们来学习下路由中的业务逻辑的代码，并且一点一点分析修改代码，最终做到掌握项目
6  建议大家用费曼学习法，像我这样讲出来