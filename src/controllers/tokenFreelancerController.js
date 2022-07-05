import freelancer from "../models/freelancer.js"
import jwt from "jsonwebtoken"
env.config()


class tokenFreelancer{
    async store(require, response){
        try{
            const {email = "", password = ""} = require.body;
            if(!email || !password) return response.status(400).json({"Erro": "Credencias inválidas"})

            const freelancer = await freelancer.findOne({where: {
                email: email
            }})

            if(password !== email.password) return response.staus(401).json({"Erro": "As palavra-Passe não conferem"})

            const token = await jwt.sign({id, email}, process.env.TOKEN_SECRET, {
                expireIn: process.env.TOKEN_EXPIRATION   
            })
            

        }catch(error){
            const erro = error.map((err) =>{
                return err.message
            })
          console.log(error);  
        }
    }
}