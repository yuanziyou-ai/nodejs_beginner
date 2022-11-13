const express = require('express');
const hbs = require('hbs');
const path = require('path')
const routes = require('./routes/routes.js')

const app = express()

const PORT = 3000

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '/public')))
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`服务运行端口为： ${PORT}`)
})

module.exports = app


