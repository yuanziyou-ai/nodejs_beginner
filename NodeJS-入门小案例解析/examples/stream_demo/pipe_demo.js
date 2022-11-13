//学习实践pipe创建文件，一次性写入
//有个小院 - 兴趣编程， 小院里的霍大侠

const fs = require("fs");
const path = require("path");

let readStream = fs.createReadStream(path.join(__dirname, "./read_file.txt"));

let writeStream = fs.createWriteStream(path.join(__dirname, "./write_file.txt"));

readStream.pipe(writeStream)

