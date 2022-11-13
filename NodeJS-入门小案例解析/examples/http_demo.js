//学习http的方法
//有个小院 - 兴趣编程， 小院里的霍大侠
const http = require('http');

// 创建服务器
http.createServer((req, res) => {
  //打印内容
  res.write('您好');
  res.end();
})
  .listen(5000, () => console.log('服务器运行中...'));
