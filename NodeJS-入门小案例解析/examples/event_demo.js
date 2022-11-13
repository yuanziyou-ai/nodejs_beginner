//学习实践EventEmitter事件过程，用于后续动作的绑定跟踪等等
//有个小院 - 兴趣编程， 小院里的霍大侠

const EventEmitter = require('events');
//生成一个UID
// import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const uuid = require('uuid');

//定义类Logger
class Logger extends EventEmitter {
  log (msg) {
    // 定义事件
    this.emit('message', { id: uuid.v4(), msg });
  }
}

// 日志实例化
const logger = new Logger();
//绑定事件
logger.on('message', data => console.log('触发事件:', data));

logger.log('欢迎来到我的小院');
logger.log('您好');
logger.log('Hello');
