const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error) {
        console.log("Unable to connect to MongoDB Server")
        return;
    }
    console.log("Connected to MongoDB server");

    //fetch all todos
    db.collection('Todo').find()
        .toArray().
        then((docs) => {
        console.log("All Todos");
        console.log(JSON.stringify(docs, undefined, 2));
        }, (error) => {
            console.log("Cannot fetch todos");
        });
    
    //fetch only non completed todos
    db.collection('Todo').find({_id: new ObjectID('59bd153e2546cf342b319831')})
        .toArray().
        then((docs) => {
            console.log("Todos to Complete");
            console.log(JSON.stringify(docs, undefined, 2));
        }, (error) => {
                console.log("Cannot fetch todos");
        });
    
    //Find the count of all the todos in the collection
    db.collection('Todo').find()
        .count().then((count) => {
            console.log(`Todos count : ${count}`);
        }, (error) => {
            console.log("Cannot fetch todos");
        });
    
    //Fetch user with the name "Banty"
    db.collection('Users').find({name:'Banty'})
        .toArray()
        .then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
        }, (error) => {
            console.log("Cannot retrieve data from Users collection " , error);
        });
    
    //Count the number of users with the name Banty

    db.collection("Users")
        .find({name: "Banty"})
        .count()
        .then((count) => {
            console.log(`Count of the Users with the name Banty : ${count}`);
        }, (error) => {
            console.log("Cannot retrieve data from Users collection " , error);
        });
    

    // db.close();
});