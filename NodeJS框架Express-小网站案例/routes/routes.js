const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController.js')

//在这里写下路由执行代码
router.get('/', appController.home)

router.get('/nodeBeginner', appController.nodeBeginnerPage)

router.get('/expressBeginner', appController.expressBeginnerPage)

router.get('/dependencies', appController.dependenciesPage)

// API Routes
router.get('/api/node_beginner', appController.nodeBeginnerAPI)

// API json data
router.get('/api/mockjson', appController.mockjson)


module.exports = router