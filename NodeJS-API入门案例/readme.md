# Node REST API Examples

通过一些小案例来学习Node API  的编程模式，案例背景是用增删改查一个产品的方式来呈现
```
# Routes
GET      /api/products
POST     /api/products
GET      /api/products/:id
PUT      /api/products/:id
DELETE   /api/products/:id

```
## 命令行操作

```
# Install dependencies
npm install


# Run in develpment
npm run dev


# Run in production
npm start

```

首先查看入口文件server.js
根据自己的需求，设计模型，修改创建models代码。然后修改入门路由文件。
添加修改controller里面的逻辑代码。然后联调测试。

另外一种，先做路由设计，模拟数据，测试。然后写模型，再写逻辑，联调测试等等。