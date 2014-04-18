var express = require('express');
var app = express();

var data = [{
	"userId" : "user001",
	"userName" : "순희",
	"userEmail" : "soon@mail.com"
}];

app.use(express.bodyParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8800");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With");
  next();
});

app.get('/getUser', function(req, res){
	var userId = req.query.userId;
	var matched = {};

	data.forEach(function(data) {
		if(data.userId === userId) matched = data;
	})
  res.send(JSON.stringify(matched));
});

app.get('/getUsers', function(req, res){
  res.send(JSON.stringify(data));
});

app.get('/Ajax/find/', function(req, res){
	data.push(req.body);
	res.send("OK");
});

app.put('/updateUser', function(req, res){
	for (var i = data.length - 1; i >= 0; i--) {
		if(data[i].userId === req.body.userId) data[i] = req.body;
		break;
	};
	
	res.send("OK");
});

app.delete('/deleteUser', function(req, res){
	for (var i = data.length - 1; i >= 0; i--) {
		if(data[i].userId === req.query.userId) data.splice(i,1);
	};
	res.send("OK");
});

app.listen(9000);
console.log('Listening on port 9000...');