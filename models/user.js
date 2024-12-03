const mongoose=require("mongoose");
var schema=mongoose.Schema;
const passportlocalmongoose=require("passport-local-mongoose");
const userschema=new schema({
    email:{
        type:String,
        required:true
    }
});
userschema.plugin(passportlocalmongoose);
module.exports=mongoose.model("user",userschema);