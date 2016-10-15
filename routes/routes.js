
module.exports = function(app){
	
	
app.get('/', function (req, res,next) {
  res.render('index');
  //next();
});

/*
app.post('/register', function (req, res,next) {
  res.render('register');
  next();
});

app.put('/user', function (req, res) {
  res.render('Got a PUT request at /user');
});


app.delete('/user', function (req, res) {
  res.render('Got a DELETE request at /user');
});
*/
}