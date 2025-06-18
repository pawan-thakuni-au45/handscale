import { NextFunction } from "express";
import { JWT_SECRET } from "./config";
import jwt from "jsonwebtoken";


export function Usermiddlewear(req:Request,res:Response,next:NextFunction){
    const token=req.headers["authorization"] ?? ""
    const decode =jwt .sign(token,JWT_SECRET);
    if(decode){

        //@ts-ignore
        req.userId=decode.userId
        next()
    }else{
        res.status(403),json({
            message:"unauthorized"
        })
    }

}