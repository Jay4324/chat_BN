const Mongoose = require("mongoose")

const authModel = Mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true

    },
    password: {
        type: String,
        required: true

    }, gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    }, profilePic: {
        type: String,
        default: ""
    }


}, { timestamps: true })


module.exports = Mongoose.model("authModel", authModel)