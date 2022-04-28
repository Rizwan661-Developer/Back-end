var bodyParser = require('body-parser');
var userRouter = require('./router/user.js')
var tutorialRouter = require('./router/tutorial.js')
var express = require('express')()
// var expressClass = require('express')
const PORT = 8080;
express.use(bodyParser.json());

// 2 things for router in express
// 1.create the router with .Router()
// 2. use the router

express.use("/user", userRouter)
express.use("/tutorial", tutorialRouter)

express.listen(PORT)
