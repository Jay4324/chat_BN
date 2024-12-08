const mongoose = require("mongoose")
const conversationModel = mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "authModel"
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "messageModel",
        default: []
    }]

}, { timestamps: true })



module.exports = mongoose.model("conversationModel", conversationModel)