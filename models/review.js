const mongoose=require("mongoose");
// const { createIndexes } = require("./listing");
var Schema=mongoose.Schema;
const reviewschema=new Schema({
    comment:String,
    rating:{
        type:Number,min:1,max:5
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
});
module.exports=mongoose.model("review",reviewschema);
