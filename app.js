// required files

const express = require('express');
const path = require('path');
const app = express();

// port is either production port, or '8888' for dev server

const port = process.env.PORT || 8888;

// this is where the ejs files reside

app.set('views', path.join(__dirname, 'views'));

// Path to assets directory

app.use(express.static(path.join(__dirname, 'assets')));

// so we can use EJS

app.set('view engine', 'ejs');

// route

app.get('/', function(req, res){
    res.render('index');
});

app.use(function(request, response, next) {
    response.status(404);
    response.render('404');
});

app.listen(port);

// For dev server

console.log('http://localhost:8888/');