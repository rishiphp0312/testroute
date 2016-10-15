var mongoose =require("mongoose");
var schema = mongoose.Schema;
var userSchema = new schema(

{
	"name":{type:String,required:true},
	"dateofbirth":{type:String,required:true},
	"city":{type:String,required:true},
	
}
);

mongoose.model('User',userSchema);