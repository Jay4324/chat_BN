const mongoose=require("mongoose")

const messageModel=mongoose.Schema({
    sender_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"authModel"
    },
    receiver_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"authModel"
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})


module.exports=mongoose.model("messageModel",messageModel)