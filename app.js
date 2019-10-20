var express = require('express');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

// var todoController = require('./controllers/todoController');

var app = express();
// app.use('/todo', todoController);
app.set('view engine', 'ejs');
app.use(express.static('./public'));

var data = [{item: 'a', }, {item: 'b'}, {item: 'c'}];


app.get('/todo', function(req, res) {
  res.render('todo', {todo: data});
})

var server = app.listen(3001, function(){
  console.log('shfsdf');
});
