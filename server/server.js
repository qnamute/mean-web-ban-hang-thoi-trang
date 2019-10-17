// Call package

var jwt = require('jsonwebtoken');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 8000; // Set the port to the app
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean-stack-project');

//Get an instace of the express router

var apiRouter = express.Router();

//App configuration
//User body-parser 

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//Configuration app to handle CROS requests

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});


// Log all requests to the console
app.use(morgan('dev'));


// Declare routes here
    
// 

// START THE SERVER
// ==========
app.listen(port);
console.log('Port must be use is: ' + port);