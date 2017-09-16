const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error) {
        console.log("Unable to connect to MongoDB Server")
        return;
    }
    console.log("Connected to MongoDB server");

    db.collection('Todo')
        .findOneAndUpdate({
            _id: new ObjectID('59bd23d72546cf342b319c6d')
        }, {
            $set: {
                completed: true
            }
        },{
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        }); 

    //increment age of document with some id
    db.collection('Users')
        .findOneAndUpdate({
            //filter
            _id: new ObjectID('59bd13d76a073e12b90460fd')
        }, {
            //update
            $inc: {
                age: 2
            }
        }, {
            //options
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    //Update name property of a document with some id
    db.collection('Users')
        .findOneAndUpdate({
            //filter
            _id: new ObjectID('59bd13d76a073e12b90460fd')
        }, {
            //update
            $set: {
                name: "Banty",
                age: 23,
                location: "Pune"
            }
        }, {
            //options
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });
    // db.close();
});