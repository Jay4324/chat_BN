const express=require("express")
const { sendMessage, getMessages } = require("../Controller/messageController")
const { isAuth } = require("../Middleware/middleware")
const messageRoutes=express.Router()
messageRoutes.post("/sendMessage",isAuth,sendMessage)
messageRoutes.get("/getMessages",isAuth,getMessages)
module.exports=messageRoutes