var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



// react begin

app.use(express.static('public'));

app.get('/test_array', function (req, res) {
  res.send(JSON.stringify({data : [1, 2, 3, 4, 5, 6, 7]}));
});

// react end

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test_collection');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/pet/:petId', function (req, res) {
	console.log('get ' + req.params.petId);
	res.send('get ' + req.params.petId);
});

app.post('/pet/:petId', function (req, res) {
	console.log('post ' + req.params.petId);
  	res.send('post ' + req.params.petId);
});


app.put('/pet/:petId', function (req, res) {
  	console.log('put ' + req.params.petId);
  	res.send('put ' + req.params.petId);
});


app.delete('/pet/:petId', function (req, res) {
	console.log('delete ' + req.params.petId);
	res.send('delete ' + req.params.petId);
});

app.get('/test_get', function (req, res) {
	res.send('get ' + JSON.stringify(req.query));
});

app.post('/test_post', function (req, res) {
  	res.send('post ' + JSON.stringify(req.body));
});

var User = require('./models/user');

app.post('/user', function (req, res) {
  	var user = new User();
  	console.log(req.body);
	// Set the beer properties that came from the POST data
	user.name = req.body.name;
	user.money = parseInt(req.body.money);
	user.GPA = parseFloat(req.body.GPA);
	user.skill = req.body.skill;

	  // Save the beer and check for errors
	user.save(function(err) {
	    if (err)
	      res.send(err);

	    res.json({ message: 'User added!', data: user });
	  });
});

app.get('/user', function (req, res) {
  	User.find(function(err, users) {
    if (err)
      res.send(err);

    res.json(users);
  });
});

app.get('/user/:user_id', function (req, res) {
  	User.findById(req.params.user_id, function(err, user) {
    if (err)
      res.send(err);

    res.json(user);
  });
});

app.put('/user/:user_id', function (req, res) {
  	User.findById(req.params.user_id, function(err, user) {
    if (err)
      res.send(err);

    // Update the existing beer quantity
    user.name = req.body.name;

    // Save the beer and check for errors
    user.save(function(err) {
      if (err)
        res.send(err);

      res.json(user);
    });
  });
});

app.delete('/user/:user_id', function (req, res) {
  	User.findByIdAndRemove(req.params.user_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'User removed!' });
  });
});


