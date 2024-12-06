
const authModel=require("../Model/authModel")

const signupUser = (req, res) => {
    try {

    } catch (er) {
        res.status(500).send({ isSuccess: false, err })
    }

}
const loginUser = (req, res) => {
    try {

    } catch (err) {
        res.status(500).send({isSuccess:false,err})

    }

}
const logoutUser = (req, res) => {
    try{

    }catch(err){
        res.status(500).send({isSuccess:false,err})
    }

}




module.exports = { loginUser, logoutUser, signupUser }