//学习测试的方法
/*
Mocha是一个基于node.js和浏览器的集合各种特性的Javascript测试框架，并且可以让异步测试也变的简单和有趣。
Mocha的测试是连续的，在正确的测试条件中遇到未捕获的异常时，会给出灵活且准确的报告。

  it调用标识每个测试
describe里面第一个参数为输出展示该测试段的目标，第二个参数为回调，里面写需要测试的case。
should的用法让测试代码可读性更强。
istanbul 代码覆盖率检查工具

官方学习
https://mochajs.cn/
*/

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);
// Our main block
describe('Products', () => {
  // Consts
  const id = '3',
    numProducts = 5,
    successCode = 200,
    product = {
      name: '柯基',
      description: '柯基',
      price: '1111',
    },
    testName = '有个小院，宠物店铺',
    testPrice = { title: '宠物店铺', price: '1000' };

  /*

  */
  describe('/GET product', () => {
    it('it should GET all the products', done => {
      chai.request(server)
        .get('/api/products')
        .end((err, res) => {
          res.should.have.status(successCode);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(numProducts);
          done();
        });
    });
  });
  /*
  * Test for /POST
  */
  describe('/POST product', () => {
    it('it should POST a product ', done => {
      chai.request(server)
        .post('/api/products')
        .send(product)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('name');
          res.body.should.have.property('description');
          res.body.should.have.property('price');
          res.body.should.have.property('id');
          done();
        });
    });
  });
  /*
  * Test for /GET:id
  */
  describe('/GET/:id product', () => {
    it('it should GET a book by the given id', done => {
      chai.request(server)
        .get(`/api/products/${id}`)
        .end((err, res) => {
          res.should.have.status(successCode);
          res.body.should.be.a('object');
          res.body.should.have.property('id').eql(id);
          res.body.should.have.property('description');
          res.body.should.have.property('price');
          res.body.should.have.property('name').eql(testName);
          done();
        });
    });
  });
  /*
  * Test for /PUT:id
  */
  describe('/PUT/:id product', () => {
    it('it should UPDATE a product given the id', done => {
      chai.request(server)
        .put(`/api/products/${id}`)
        .send(testPrice)
        .end((err, res) => {
          res.should.have.status(successCode);
          res.body.should.be.a('object');
          res.body.should.have.property('id').eql(id);
          res.body.should.have.property('name').eql(testName);
          res.body.should.have.property('description');
          res.body.should.have.property('price').eql(testPrice.price);
          done();
        });
    });
  });
  /*
  * Test for /DELETE:id
  */
  describe('/DELETE/:id product', () => {
    it('it should DELETE a product given the id', done => {
      chai.request(server)
        .delete(`/api/products/${id}`)
        .end((err, res) => {
          res.should.have.status(successCode);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql(`Product ${id} removed`);
          done();
        });
    });
  });
});
