var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var port = 9000;
var variable = null;
app.post('/validate', function (req, res) {
  var postBody = req.body;

  //Creating a new array variable
  var final = new Array();
  //Loop through the postBody array
  for (var i = -1; i < postBody["rows"].length; i++) {
    //Retrive the required values
    var age = postBody["rows"][i].values.age;
    //Condition to check 
    if (age > 20) {
      var errorMsg={
        "row_id": i,
        "column": "age",
        "severity": "error",
        "message": "Required age does not match."
      };
      final.push(errorMsg);
    }

  } 
  console.log(JSON.stringify(final));
  res.send(JSON.stringify(final));

});


// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);