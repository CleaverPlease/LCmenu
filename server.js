var express = require('express');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.render('index')
});

app.get('/lunch_menu', function(req, res) {
  res.render('lunch')
});

app.get('/dinner_menu', function(req, res) {
  res.render('dinner')
});

app.get('/contact', function(req, res) {
  res.render('contact')
});
app.get('/dinner_combo', function(req, res) {
  res.render('dinnercombo')
});
app.get('/family_combo', function(req, res) {
  res.render('familycombo')
});
app.get('/chef_specials', function(req, res) {
  res.render('specials')
});

app.listen(8000, function () {
});
