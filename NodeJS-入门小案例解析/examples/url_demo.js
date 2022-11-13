//学习url模块的方法
//有个小院 - 兴趣编程， 小院里的霍大侠
const url = require('url');

const myUrl = new URL('http://www.yougexiaoyuan.com');

// 获取url链接
console.log(myUrl.href);
console.log(myUrl.toString());

// 获取主机域名
console.log(myUrl.host);

// 获取主机名称
console.log(myUrl.hostname);

// 获取网站路径
console.log(myUrl.pathname);

// 获取搜索条件
console.log(myUrl.search);

// 获取搜素条件参数
console.log(myUrl.searchParams);

// 添加搜素参数
myUrl.searchParams.append('id', '123');
console.log(myUrl.searchParams);

//循环获取参数
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
