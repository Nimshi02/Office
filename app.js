var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var port = 9000;

app.post('/validate', function(req, res) {
  var username=req.body.username;
  var email=req.body.email;
  var final=new Array();
  var test2={
    "row_id": 2,
    "column": "userName",
    "severity": "warning",
    "message": "Employee no longer works for company."
  };
  var test3={
    "row_id": 2,
    "column": "birthdate",
    "severity": "error",
    "message": "Employee birthday is different.",
    "suggestion": "04/05/2003"
  };
  var test4={
    "row_id": 3,
    "column": "age",
    "severity": "error",
    "message": "Ege is wrong",
    "suggestion": "20"
  };
final.push(test2);
final.push(test3);
final.push(test4);
 // if(username==email)
//{
//	console.log("True");
//	res.send(null);
//}
//else
//{
//	res.send(testjson);
//}
res.send(JSON.stringify(final));
});
app.get('/',function(req,res){
res.send("Hello from server");
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);