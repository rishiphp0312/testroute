var fs =require("fs");
//var express =require("express");
//var async =require("async");
var qur =require("q");


var writeFile=function (name,content){
	var que=qur.defer();
	fs.writeFile(name,content,function(err){
		if(err){
			console.log(err);
			que.reject(err);
		}else{
			que.resolve('succes');
		}
	});
	return que.promise;
}

writeFile("jjj","good").then(function(dat){
	
	console.log('written  domne========='+dat)
},function(err){
	
	console.log('written  domne'+err);
});