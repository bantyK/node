const express = require('express');
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

//register middleware
app.use((request, response, next) => {
  var now = new Date().toString();
  var log = `${now} : ${request.method} ${request.url}`;
  console.log(log);
  fs.appendFile('server_logs.txt', log + '\n', (err) => {
    if(err) {
      console.log('Unable to append to server log');
    }
  });
  next();
});

// app.use((request, response, next) => {
//   response.render('maintainance.hbs');
// });

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'))
hbs.registerHelper('current_year', () => {
    return new Date().getFullYear();
});

hbs.registerHelper("scream_it", (text) => {
    return text.toUpperCase();
});

app.get('/', (request, response) => {
    response.render('home.hbs', {
        page_title : 'Home Page',
        welcome_message: 'Welcome to my Website'
    })
});

app.get('/about', (request, response) => {
    response.render('about.hbs', {
        page_title : 'About Page'
    });
});

app.get('/bad', (request, response) => {
    response.send({
        errorMessage: 'Error : Cannot process request'
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
