const fs = require('fs')
//实现一些 常用的工具方法
function writeDataToFile (filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
    if (err) {
      console.log(err)
    }
  })
}
//获取post请求的数据，复习Promise的对象，它方便编写异步程序，可以回到PPT语法课件中穿插学习
function getPostData (req) {
  return new Promise((resolve, reject) => {
    try {
      let body = ''
      //这里代表绑定事件。是接收客户端数据时候响应的事件
      // 因为每次data事件，接收到的chunk实际上是一个Buffer对象。
      // 我们将这些buffer对象保存起来，最后使用Buffer.concat来对其进行合并，最终得到最后的结果。
      req.on('data', (chunk) => {
        body += chunk.toString()
      })
      //这里代表绑定事件。是数据接收完毕后响应的事件
      req.on('end', () => {
        resolve(body)
      })
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  writeDataToFile,
  getPostData
}
