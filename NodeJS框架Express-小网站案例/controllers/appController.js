const bent = require('bent')//一个JS HTTP Request Client，类似axio
const getJSON = bent('json')

const packageJson = require('../package.json')
const NODE_API_URL = 'http://localhost:3000/api/mockjson'

exports.nodeBeginnerPage = async (req, res) => {
  const msg = "恭喜你迈出了第一步，跟着我们来学习编程";
  res.render('node-beginner.hbs', { msg })
}

exports.expressBeginnerPage = async (req, res) => {
  const msg = "恭喜你开始学习Express框架";
  res.render('express-beginner.hbs', { msg })
}

exports.dependenciesPage = async (req, res) => {
  const dependencies = Object.entries(
    packageJson.dependencies
  ).map(([key, value]) => ({ name: key, version: value }))
  res.render('dependencies.hbs', { dependencies })
}

exports.nodeBeginnerAPI = async (req, res) => {
  try {
    res.setHeader('Content-type', 'application/json')
    let beginner = await getJSON(NODE_API_URL)
    res.json(beginner);
  } catch (error) {
    res.json({ error, message: `无法获取JSON内容 ${req.route.path}` })
  }
}

exports.mockjson = (req, res) => {
  res.setHeader('Content-type', 'application/json')
  let json = "[{title: '兴趣编程1',desc: '学习案例1',date: '2027-12-12'},{title: '兴趣编程2',desc: '学习案例2',date: '2028-12-13'}]";
  res.json({ json });
}

exports.home = (req, res) => {
  res.render('home.hbs')
}