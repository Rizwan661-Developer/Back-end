const router = require('express').Router();   //creating router
const tutorial = require("../controller/tutorial.js") //importing controller files to use controller functions

// the above declarations can also be written as
// var express = require('express')
// var tutorialRouter = express.Router()

/**
 * api/tutorials-GET -get all the tutorials
 * api/tutorials/:id -GET - get the tutorials by id
 * api/tutorials - POST - create new tutorial
 * api/tutorials - DELETE - delte all the tutorials
 * api/tutorials - PUT - update tutorial based on ID
 * api/tutorials/title - PATCH - update title
 */
  //calling api's form the controller file to print the request on the screen
     router.get("/", tutorial.getAllTutorial)
     router.get("/:id", tutorial.getTutorialbyID)
     router.post("/", tutorial.createTutorial)
     router.delete("/", tutorial.deleteAllTutorials)
     router.delete("/:id", tutorial.deleteTutorialByID)
     router.put("/", tutorial.updateTutorial)
     router.patch("/:title", tutorial.updateTitle)
     module.exports =router  //module.export method is used to make file available to other    
