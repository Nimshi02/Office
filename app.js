var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var port = 9000;

app.post('/validate', function(req, res) {
  var username=req.body.username;
  var email=req.body.email;
  if(username==email)
{
	console.log("True");
	res.send(null);
}
else
{
	res.send(username);
}
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);