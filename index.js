// index.js

var express = require('express');
var app = express();

app.set('view engine','ejs'); // ejs 사용을 위해 express의 view engine에 ejs 를 set하는 코드
app.use(express.static(__dirname + '/public'));

app.get('/hello', function(req,res){ // query를 통해서 이름을 받는 코드
  res.render('hello', {name:req.query.nameQuery});
});

app.get('/hello/:nameParam', function(req,res){ // route parameter를 통해 이름을 받는 코드
  res.render('hello', {name:req.params.nameParam});
});

var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
