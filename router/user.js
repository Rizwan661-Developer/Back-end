
var expressClass = require('express')
var userController = require('../controller/user.js')
var userRouter = expressClass.Router()

userRouter.get("/", userController.getUser)
userRouter.get("/:id", userController.getUserDetailByname)
userRouter.post("/", userController.createUser)
userRouter.delete("/", userController.deleteUser)
userRouter.put("/", userController.updateUser)
userRouter.patch("/", userController.patchUser)

module.exports = userRouter

// passing the data in URL - 2 types 
// 1. param
// 2.Query
// https://www.google.com/user/rizwan  #param
//  https://www.google.com/user?name=rizwan&&age=23 #query

// GET - request information()
// POST - pass data from frontend to backend via api in JSON format in request
// DELETE -  
// UPDATE - pass data from frontend to backend via api in JSON format to update it
// PATCH - patch is for minor update 