// Call package

var jwt = require('jsonwebtoken');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 8000; // Set the port to the app
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean-stack-project');

