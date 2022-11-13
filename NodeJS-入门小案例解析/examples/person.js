//学习定义类和构造函数。
//有个小院 - 兴趣编程， 小院里的霍大侠

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting () {
    console.log(`欢迎， ${this.name} ，我今年 ${this.age} 岁。`);
  }
}


module.exports = Person;


// node采用的是CommonJS模块化，使用require导入，exports或module.exports导出
// require在没有任何内容导出去的情况下获取某个文件的内容，会得到一个空对象
// require仅在模块第一次被使用时执行一次
// 使用exports时，只能单个设置属性exports.a = a;
// 使用module.exports可以单个设置属性，也可以整个赋值
// 优先使用module.exports
// exports 是 module.exports 的引用。require 是通过 module.exports 来获取模块的导出的。

// CommonJS格式用于在Node.js中require和module.exports定义的依赖关系和模块。
// ES模块格式。从ES6（ES2015）开始，它使用export关键字导出模块的公共API，并使用import关键字导入模块。
