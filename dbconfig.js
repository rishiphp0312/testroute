var mongoose = require('mongoose');
var user=require('./models/user.model');

var dbUri ='mongodb://localhost/test';

var conn = mongoose.connect(dbUri);
//ar express =require("express");
//var async =require("async");

var User = mongoose.model('User');

module.exports.connect = conn;

mongoose.connection.on('connected',function(){
	console.log('connected mongo  domne=========');
	/*
	var newUser = new User();
	newUser.name='ajay';
	newUser.dateofbirth='14/12/1981';
	newUser.city='ajay';
	newUser.save(function(err,saveuser){
		if(err)
			console.log(err);
		
		
	});*/
});


mongoose.connection.on('error',function(){
	console.log('error  domne=========');
	
	
});

mongoose.connection.on('disconnected',function(){
	console.log('disconnected  domne=========');
	
	
});
