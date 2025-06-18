
import express from "express"
import jwt  from "jsonwebtoken"
import { Usermiddlewear } from "./usermiddlewear"

const app=express()

app.use(express.json())

app.use("/signup",(req,res)=>{

    const {name,email,password}=req.body

    try{

    

User.create({
        name,
        email,
        password
    })
    res.json({
        message:"you are signedup succenfully"
    })
}catch(e){

}

})

app.use("/signin",(req,res)=>{

    const{email,password}=req.body

    try{

    const user=User.findOne({
        email,password
    })
    if(user){
       const token= jwt.sign({
            user._id
        },JWT_SECRET)

    }
    res.jso
        message:"you are logged in succesfully"
    })
}catch(e){

}
    
})

app.use("/room",Usermiddlewear,(req,res)=>{
    
})

app.listen(3002)