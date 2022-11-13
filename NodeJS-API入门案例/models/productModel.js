let products = require('../data/products')
//获取UID唯一标识
const { v4: uuidv4 } = require('uuid')

const { writeDataToFile } = require('../utils')

//增删改查products的功能，比如查询全部，查找单独信息，创建，修改，删除等。一般入门开发必备编程操作

function findAll () {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

function findById (id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id)
    resolve(product)
  })
}
// ...product 其中三个点代表扩展运算符，ES6中新增加的内容，这里代表product对象和id合并
function create (product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product }
    products.push(newProduct)
    if (process.env.NODE_ENV !== 'test') {
      writeDataToFile('./data/products.json', products);
    }
    resolve(newProduct)
  })
}

function update (id, product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id)
    products[index] = { id, ...product }
    if (process.env.NODE_ENV !== 'test') {
      writeDataToFile('./data/products.json', products);
    }
    resolve(products[index])
  })
}

function remove (id) {
  return new Promise((resolve, reject) => {
    products = products.filter((p) => p.id !== id)
    if (process.env.NODE_ENV !== 'test') {
      writeDataToFile('./data/products.json', products);
    }
    resolve()
  })
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
}