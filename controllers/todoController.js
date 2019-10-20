var bodyParser = require('body-parser');
var express = require('express');

var route = express.Router();

var urlencodedParser = bodyParser.urlencoded({extended: false});
//
// module.exports = function(app){

var data = [{item: 'a', }, {item: 'b'}, {item: 'c'}];

  route.get('/', function(req, res){
    console.log('todo');
    res.render('todo', {todo: data});
  });

  route.post('/todo',urlencodedParser, function(req, res){
    data.push(req.body);
    res.json(data);
  });

  route.delete('/todo/:item', function(req, res){
    data = data.filter(function(todo){
      return todoo.item.replace(/ /g, '-') !== req.params.item;

    });
  });

  module.exports = route;
// };
