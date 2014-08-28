var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

//var myDataRef = new Firebase('https://gasngo.firebaseio.com');

var bodyParser = require('body-parser');
var port = 3000;

var publicPath = path.join(__dirname,'..','app');
console.log(publicPath);
app.use(express.static(publicPath));


//Server Index.html to all angular routes
var indexHtml = fs.readFileSync(path.join(__dirname,'..','app/index.html'));
var ngroutes = require('./angularroutes.json');
ngroutes.routes.forEach(function(route){
  app.get(route, function(req, res){
    res.type('html');
    res.send(indexHtml);
  });
});


app.listen(port, function(){
  console.log('app is being server on port %d', port);
});
