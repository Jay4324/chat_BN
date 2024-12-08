const messageModel = require("../Model/messageModel")
const conversationModel = require("../Model/conversationModel")

const sendMessage = async (req, res) => {
    try {
        let {  message } = req.body
        let {receiver_Id}=req.query
        let sender_Id=req.currentLoginUser._id
        if (!sender_Id || !receiver_Id || !message) {
            return res.status(400).send({ isSuccess: false, msg: "data is required" })
        }
        let oldConversation = await conversationModel.findOne({ participants: { $all: [sender_Id, receiver_Id] } })
        if (!oldConversation) {
            oldConversation = new conversationModel({ participants: [sender_Id, receiver_Id] })
        }
        let userMessage = new messageModel({ ...req.body })
        if (userMessage) {

            oldConversation.messages.push(userMessage._id)
        }
        await Promise.all([userMessage.save(), oldConversation.save()])

        res.status(201).send({ isSuccess: true, msg: 'message has been sended ' })

    } catch (err) {
        console.log("Erroe in sendMesage controller", err)
        res.status(500).send({ isSuccess: false, err })
    }
}
const getMessages=async(req,res)=>{
    try{
    
        let sender_Id=req.currentLoginUser._id
        let {receiver_Id}=req.query
        if(!sender_Id||!receiver_Id){
            return res.status(404).send({isSuccess:false,msg:"data is required"})
        }
        let messages=await conversationModel.findOne({participants:{$all:[sender_Id,receiver_Id]}}).populate("messages")
        res.status(200).send({isSuccess:true,messages:messages.messages})

    }catch(err){
        console.log("Error in getMessages Controller")
        res.status(500).send({isSuccess:false,err})
    }
}



module.exports = { sendMessage,getMessages }