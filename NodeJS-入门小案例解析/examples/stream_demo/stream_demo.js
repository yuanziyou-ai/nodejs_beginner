//学习实践pipe创建文件，不间断写入
//有个小院 - 兴趣编程， 小院里的霍大侠
const fs = require("fs");
const path = require("path");


let readStream = fs.createReadStream(path.join(__dirname, "./read_file.txt"));


let writeStream = fs.createWriteStream(path.join(__dirname, "./write_file.txt"));


//通过不间断的方式，陆续写入
readStream.on('data', chunk => {
  console.log("新的内容被写入" + Date.now());
  writeStream.write(chunk)
})


