const authModel=require("../Model/authModel")

const getUserForSideBar=async(req,res)=>{
    try{
        let currentLoginUser=req.currentLoginUser._id
        let users=await authModel.find({_id:{$ne:currentLoginUser}}).select("-password")
        res.status(200).send({isSuccess:true,users})

    }catch(err){
        console.log("Error In getUserForSidebar Controller")
        res.status(500).send({isSuccess:false,err})
    }
}



module.exports={getUserForSideBar}