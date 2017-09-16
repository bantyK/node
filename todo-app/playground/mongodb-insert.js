const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error) {
        console.log("Unable to connect to MongoDB Server")
        return;
    }
    console.log("Connected to MongoDB server");

    //insert new document into Todo collection
    /*db.collection('Todo').insertOne({
        text: "Something to do"
    }, (error, result) => {
        if(error) {
            console.log("Unable to insert Todo");
            return;
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });*/


    //insert new document into Users collection
    /*db.collection('Users').insertOne({
        name: "Ezio",
        age: 23,
        location: 'Florence'
    }, (error, result)=> {
        if(error) {
            console.log("Unable to insert Users");
            return;
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    })*/

    db.close();
});