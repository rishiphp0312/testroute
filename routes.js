var mongoose = require('mongoose');
var user=require('./models/user.model');
var User = mongoose.model('User');
exports.home=function(req,res){
  console.log('username==');

  res.render('register');
  	
                  }
