const express = require('express') //mandatory to create express
const app = express() //variable app as express
const tutorialRouter= require("./router/tutorial.js") //importing router files to use router functions
const
app.use(express.json())

app.get('/' , (req, res) =>{  // simple get request
    res.send({message:"Welcome to my application!"})
})//http://localhost:8080
app.use("/api/tutorials", tutorialRouter ) //using router functions and query to access the api
app.listen(8080, (req, res) =>{
    console.log("Hey , your app got started at port 8080")
})

// http://localhost:8080/api/tutorials
/**
 * api/tutorials-GET -get all the tutorials
 * api/tutorials/:id -GET - get the tutorials by id
 * api/tutorials - POST - create new tutorial
 * api/tutorials - DELETE - delte all the tutorials
 * api/tutorials - PUT - update tutorial based on ID
 * api/tutorials/title - PATCH - update title
 */
