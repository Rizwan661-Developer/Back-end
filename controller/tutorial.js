
  //creating api with a specific request and accessing them on the router/tutorial.js 

    module.exports.getAllTutorial= (req, res) => {
    res.send("GET")
    }
    module.exports.getTutorialbyID= (req, res) => {
        res.send("GET")
    }
    module.exports.createTutorial= (req, res) => {
        res.send("POST")
    }
    module.exports.deleteAllTutorials= (req, res) => {
        res.send("DELETE")
    }
    module.exports.deleteTutorialByID= (req, res) => {
        res.send("DELETE")
    }
    module.exports.updateTutorial= (req, res) => {
        res.send("PUT")
    }
    module.exports.updateTitle= (req, res) => {
        res.send("PATCH")
    }
    