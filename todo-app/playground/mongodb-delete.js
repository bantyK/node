const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error) {
        console.log("Unable to connect to MongoDB Server")
        return;
    }
    console.log("Connected to MongoDB server");

     //delete many
    /*db.collection("Todo")
        .deleteMany({text: "Complete ML week assignment"})
        .then((result) => {
            console.log(result);
        });
    
    //delete one
    db.collection("Todo")
    .deleteOne({text: "Delete this"})
    .then((result) => {
        console.log(result);
    });

    //findOneAndDelete
    db.collection("Todo")
    .findOneAndDelete({completed: false})
    .then((result) => {
        console.log(result);
    });*/

    //Delete all users with the name Banty
    db.collection('Users')
        .deleteMany({name: "Banty"})
        .then((result) => {
            console.log(result);
        }, (error) => {
            console.log("Error deleting document ", error);
        });
    
    //Delete User with ID
    db.collection('Users')
        .findOneAndDelete({_id: new ObjectID('59bd1f981dcf8314e7b9e590')})
        .then((result) => {
            console.log(result);
        });

    // db.close();
});