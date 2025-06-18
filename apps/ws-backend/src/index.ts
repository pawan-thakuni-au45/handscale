
import { WebSocketServer } from "ws";
import { JWT_SECRET } from "./config";
import jwt, { JwtPayload } from "jsonwebtoken"

const wss=new WebSocketServer({port:8080});
wss.on('connection',function connection(ws,request){
    const url=request.url 
    //http://localhspt:3000?token/fefefefe
    if(!url){
        return
    }
    const queryparams=new URLSearchParams(url.split('?')[1])
    const token=queryparams.get('token') || ""
    const decode=jwt.verify(token,JWT_SECRET)
    if(!decode || !(decode as JwtPayload).userId){
        ws.close()
        return
    }

    ws.on('message',function message(data){
        ws.send('pong')
    })

})