const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/users');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (request, response) => {
    console.log(request.body);
    var todo = new Todo({
        text: request.body.text
    });
    todo.save().then((doc) => {
        response.send(JSON.stringify(doc, undefined, 2));
    }, (error) => {
        response.status(400).send(error);
    });
});



app.listen(3000, () => {
    console.log("Server is up and running in port 3000");
});
