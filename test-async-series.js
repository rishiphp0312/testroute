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
	
async.parallel([
function (done){
	

writeFile("f1","goodhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllhhhhhhhhhhh==goodhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllhhhhhhhhhhhgoodhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllhhhhhhhhhhhgoodhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllhhhhhhhhhhhgoodhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllhhhhhhhhhhhgoodhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllhhhhhhhhhhh",function(err){
	if(err)
	console.log('written  domne========='+err);
    // else
		 	console.log('written  f1 domne========='+err);
		
		
done();
})

}
,
function (done){
	
writeFile("","good",function(err){
	if(err)
	console.log('written  domne========='+err);

	console.log('written f2 domne========='+err);


done();

})

},
function (done){
	
writeFile("f3","good",function(err){
	if(err)
	console.log('written  domne========='+err);
	console.log('written f3 domne========='+err);

done();

})
}


],function (){
	
	console.log('written all files');

});