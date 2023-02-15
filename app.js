var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var port = 9000;

app.post('/validate', function(req, res) {
  var username=req.body.username;
  var email=req.body.email;
  var test2={
    "row_id": 2,
    "column": "employee_name",
    "severity": "warning",
    "message": "Employee no longer works for company."
  };
  var test3={
    "row_id": 2,
    "column": "employee_end_date",
    "severity": "error",
    "message": "Employee gave notice on this date.",
    "suggestion": "04/15/2020"
  };
  var test4={
    "row_id": 3,
    "column": "employee_name",
    "severity": "error",
    "message": "Employee's name has changed",
    "suggestion": "Johnny Appleseed"
  }
test2.test=new Array();
test2.test.push(test3)
 // if(username==email)
//{
//	console.log("True");
//	res.send(null);
//}
//else
//{
//	res.send(testjson);
//}
res.send(JSON.stringify(test2));
});
app.get('/',function(req,res){
res.send("Hello from server");
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);