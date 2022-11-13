//学习path的方法
//有个小院 - 兴趣编程， 小院里的霍大侠
const path = require('path');

//获取文件名
console.log(path.basename(__filename));

// 获取目录名
console.log(path.dirname(__filename));

// 获取扩展名
console.log(path.extname(__filename));

// 获取文件夹父目录
const parentDir = path.dirname(__dirname);
console.log(parentDir);
