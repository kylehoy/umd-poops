var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("welcome to UMD poops");
});

app.listen(process.env.PORT);