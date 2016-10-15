var fs =require("fs");
var express =require("express");
var async =require("async");
var qur =require("q");
var db=  require("./dbconfig");

var app = express();
var routes =require("./routes/routes");
//var user=require('./routes/user.js');
var bodyParser=require('body-parser');



//var router = express.Router();
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


routes(app);
console.log(routes.home);
//app.get('/',routes.home);

//app.post('/register',user.register);


//app.post('/newUser',user.doCreate);


  var port =process.env.port||7000;
  
  
  var ser =app.listen(port);