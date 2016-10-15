var fs =require("fs");
//var express =require("express");
var async =require("async");
var qur =require("q");


var writeFile=function (name,content,calback){
	//var que=qur.defer();
	fs.writeFile(name,content,function(err){
		calback(err);
	}
	
	);
		console.log(name);

	return;
	
}
	
async.waterfall([
function (done){
	

writeFile("f1","goodhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllhhhhhhhhhhh==goodhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllhhhhhhhhhhhgoodhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllhhhhhhhhhhhgoodhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllhhhhhhhhhhhgoodhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllhhhhhhhhhhhgoodhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllhhhhhhhhhhh",function(err){
	if(err)
	console.log('written  domne========='+err);
    // else
		 	console.log('written  f1 domne========='+err);
		
		
		done(undefined,1,2,3);
})

}
,
function (f1,f2,f3,done){
	console.log(f1,f2,f3);
	
writeFile("nn","good",function(err){
	if(err)
	console.log('written  domne========='+err);

	console.log('written f2 domne========='+err);


		done(err,1,2);

})

},
function (f1,f2,done){
		console.log(f1,f2);

writeFile("f3","good",function(err){
	if(err)
	console.log('written  domne========='+err);
	console.log('written f3 domne========='+err);
    done();
})
}
],function (err){
	if(err)		
	console.log('erro in  files'+err);
	
	console.log('written all files');

});