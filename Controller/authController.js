
const authModel = require("../Model/authModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config()
const signupUser = async (req, res) => {
    try {
      
        let { userName, fullName, password, email, gender } = req.body
        if (!userName || !fullName || !password || !email || !gender) {
            return res.status(404).send({ isSuccess: false, msg: "data is required" })
        }
        let check = await authModel.findOne({ email })
        if (check) {
            return res.status(400).send({ isSuccess: false, msg: "User Already Exist " })
        }
        let hashPass=bcrypt.hashSync(req.body.password,10)
        let boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${userName}`
        let girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${userName}`
        let userSaveData = new authModel({ ...req.body,password:hashPass,profilePic:
            gender=="male"?boyProfilePic:girlProfilePic
        })
        let reponseData = await userSaveData.save()
        return res.status(201).send({ isSuccess: true, msg: "Data added succesfully",data:reponseData })




    } catch (err) {
        res.status(500).send({ isSuccess: false, err })
    }

}
const loginUser = async(req, res) => {
    try {
        console.log("in login Controller function",req.body)
        let {email,password}=req.body
        if(!email||!password){
            return res.status(404).send({isSuccess:false,msg:"data is required"})
        }
        let check=await authModel.findOne({email})
        if(!check){
            return res.status(404).send({isSuccess:false,msg:'data not found'})
        }
        let checkPass=bcrypt.compareSync(password,check.password)
        if(!checkPass){
            return res.status(401).send({isSuccess:false,msg:"Invalid Credentials"})
        }
        let Token=jwt.sign({_id:check._id},process.env.SECRET_KEY)
        res.cookie("Token",Token)
        res.status(200).send({isSuccess:true,msg:"Login Success"})

    } catch (err) {
        res.status(500).send({ isSuccess: false, err })

    }

}
const logoutUser = (req, res) => {
    try {
        res.clearCookie("Token")
        res.status(200).send({isSuccess:true,msg:"Logout Success"})

    } catch (err) {
        res.status(500).send({ isSuccess: false, err })
    }

}




module.exports = { loginUser, logoutUser, signupUser }