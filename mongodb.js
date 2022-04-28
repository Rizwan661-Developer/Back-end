
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rizwan661:<password>@mongoose01.b0qmr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});




mongodb+srv//rizwan661:<password>@mongoose01.b0qmr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority