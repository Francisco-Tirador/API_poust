const {Login}=require('./login.controllers')
const jwt=require('jsonwebtoken')

const login=(req,res)=>{
    const data=req.body
    const accion=Login(data)
    if(accion){
        const token=jwt.sign({
            id:accion.id,
            name:accion.name,
            emeil:accion.emeil,
        },'Goku')
        res.status(200).json({token:token})}
    else{res.status(404).json({ERR:'the data it is not default'})}

} 

exports.login=login