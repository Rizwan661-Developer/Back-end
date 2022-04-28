

module.exports = {
    getUser: (req, res) => {
        console.log(req.query.age);
        console.log(req.query.name);
        res.send("Hey I am in controller now, get request")
    },
 createUser: (req, res) => {
     console.log(req.body);
        res.send("Hey I am in controller now, post request")
    },
 deleteUser: (req, res) => {
        res.send("Hey I am in controller now, delete request")
    },
 updateUser: (req, res) => {
        res.send("Hey I am in controller now, update request")
    },
 patchUser: (req, res) => {
        res.send("Hey I am in controller now, patch request")
    },
getUserDetailByname: (req, res) => {
    console.log(req.params.name)
        res.send(req.params.name)
    }

}  