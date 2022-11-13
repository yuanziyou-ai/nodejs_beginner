const http = require('http');
//定义API接口的常量
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./controllers/productController');

//创建web服务器
const server = http.createServer((req, res) => {

  if (req.url === '/api/products' && req.method === 'GET') {
    getProducts(req, res);
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === 'GET') {
    const id = req.url.split('/')[3];
    getProduct(req, res, id);
  } else if (req.url === '/api/products' && req.method === 'POST') {
    createProduct(req, res);
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === 'PUT') {
    const id = req.url.split('/')[3];
    updateProduct(req, res, id);
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === 'DELETE') {
    const id = req.url.split('/')[3];
    deleteProduct(req, res, id);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        message: '没有发现路由，无法展示页面404',
      })
    );
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`服务器运行端口为： ${PORT}`));

module.exports = server;
