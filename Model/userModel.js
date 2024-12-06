const Mongoose = require("mongoose")
const useModel = Mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase:true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    }
},{timestamps:true})




module.exports = Mongoose.model("userModel", useModel)



