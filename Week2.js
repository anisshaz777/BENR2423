const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.yuk8d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if (err)
    {
        console.log(err.message)
    return
    }
    console.log('Connected to MongoDB.');
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
