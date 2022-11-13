//学入口文件和一些常用功能
//有个小院 - 兴趣编程， 小院里的霍大侠

const http = require("http");
const path = require("path");
const fs = require("fs");

//创建web服务器
const server = http.createServer((req, res) => {

  //这里展示可以根据路径来展示静态的html页面
  if (req.url === '/') {
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    );
  }
  //这里展示node提供API接口返回json的编码方式，是不是写一个API很简单
  if (req.url === '/api/users') {
    const users = [
      { name: '霍大侠', age: 40 },
      { name: '小禾', age: 10 }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }

  // 构建文件路径
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // 获取文件扩展名
  let extname = path.extname(filePath);

  // 定义内容类型
  let contentType = "text/html";

  // 判断后缀名来确定文件展示类型
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // 检查是否为html类型，做业务处理
  if (contentType == "text/html" && extname == "") filePath += ".html";

  //日志打印文件路径
  console.log(filePath);

  // 读取文件
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // 如果发生错误，没有找到文件
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //  其他的服务器未知错误，输出500错误号
        res.writeHead(500);
        res.end(`服务器发生错误: ${err.code}`);
      }
    } else {
      // 正常读取
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});
//设置web服务器的端口号
const PORT = process.env.PORT || 5003;
//运行服务器并监听
server.listen(PORT, () => console.log(`Web 服务器运行中，端口号为： ${PORT}`));
