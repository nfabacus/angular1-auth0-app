var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');

app.use(cors());

var authCheck = jwt({
  secret: new Buffer('ZuqySGi8_WtEQhSSdL-WTrVnk8ivjMA5BmqHUEFsCRf7EBqCWKlKj7wD7MxuyfJG'),
  audience: 'VsJqiAUw2Q43QID4hRsS8J4Atzn0DDPA'
});

app.get('/api/public', function(req, res){
  res.json({ message: "Hello from a public endpoint!  You don't need to be authenticated to see this"});
});

app.get('/api/private', authCheck, function(req, res){
  res.json({ message: "Hello from a private endpoint!  You DO need to be authenticated to see this"});
});

app.listen(3001);
console.log('Listening on http://localhost:3001');
