const mongoose=require("mongoose");

const LoginSystem=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    id:{
        type:String,
        required:true,
        
    }

})

module.exports=mongoose.model("LoginSystem",LoginSystem);