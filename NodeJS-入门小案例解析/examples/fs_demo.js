//学习fs的方法
//有个小院 - 兴趣编程， 小院里的霍大侠

const fs = require('fs');
const path = require('path');


//学习创建文件夹，创建文件，更新文件的操作
//有个小院 - 兴趣编程， 小院里的霍大侠

const users = [
  { name: "霍大侠" },
  { name: "小禾" },
  { name: "大圣" },
  { name: "哪吒" }
]


let folderName = "/data";

let files = [];
if (fs.existsSync(__dirname + folderName)) {
  console.log("文件夹已存在，程序将会自动删除");
  //删除文件夹必须先循环删除下面文件
  files = fs.readdirSync(__dirname + folderName);
  files.forEach((file, index) => {
    let curPath = path + "/" + file;
    //判断是否是文件夹
    if (fs.statSync(curPath).isDirectory()) {
      console.log("这里多了一个文件夹，需要递归调用删除哦");
      return;
    } else {
      //是文件的话说明是最后一层不需要递归 
      fs.unlinkSync(curPath); //删除文件
    }
  });
  fs.rmdirSync(__dirname + folderName);
  console.log("自动删除文件完毕");
}
else {
  fs.mkdir(path.join(__dirname, folderName), {}, err => {
    if (err) throw err;

    console.log("创建文件夹完成");

    fs.writeFile(path.join(__dirname, folderName, "name.json"), JSON.stringify(users), err => {
      if (err) throw err;

      console.log("创建name.json文件完成");

      fs.readFile(path.join(__dirname, folderName, "name.json"), "utf8", (err, users) => {
        if (err) throw err;

        console.log("开始展示用户名");

        JSON.parse(users).forEach(user => {
          console.log(user.name);
        });


        fs.rename(path.join(__dirname, folderName, "name.json"), path.join(__dirname, folderName, "users.json"), err => {
          if (err) throw err;

          console.log("文件重命名完成，重命名后为users.json");
        });

      });
    });
  })
}
