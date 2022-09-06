const {getAllPoust,getById,upDateUser,createUser,deleteUser,creadoporUser,getPostByIDandIdUser}=require('./poust.controllers')
const passport=require('passport')
require('../auth/authMidelwere')

const getPoust=(req,res)=>{
  
    const accion=getAllPoust()
    res.status(200).json({length:accion.length,Poust:accion})
}

const getXid=(req,res)=>{
   
    const id=req.params.id
    const accion= getById(id)
    if(accion){res.status(200).json(accion)}
    else{res.status(400).json({Err:'this id does not exist'})}
}

const createP=(req,res)=>{
    const data=req.body
    const idUS=req.user.id
    console.log(idUS)

    if(!data.tittle&&!data.content){res.status(400).json({Err:'missing data'})}
    else{
        const accion=createUser(data,idUS)
        res.status(201).json({length:accion.length,Poust:accion})}
}

const removePoust=(req,res)=>{
    const id=req.params.id
    const idUS=req.user.id
    const accion=deleteUser(id,idUS)
    if(accion===800){res.status(400).json({ERR:'You can´t deleted this post'})}else{
    if(accion){ res.status(200).json({length:accion.length,Poust:accion})}
    else{ res.status(400).json({ERR:'this id does not exist'})}}
}

const upPoust=(req,res)=>{
    const id=req.params.id
    const idUS=req.user.id
    const data=req.body
    const accion=upDateUser(data,id,idUS)
    if(accion.user_id!==idUS){res.status(400).json({ERR:'You can´t edited this post'})}else{
    if(!data.tittle&&!data.content){res.status(400).json({Err:'missing data'})}
    else{if(accion){res.status(201).json({length:accion.length,Poust:accion})}
    else{res.status(400).json({Err:'this id ist'})}}}
}

const MyPost=(req,res)=>{
    const idUS=req.user.id
    const accion=creadoporUser(idUS)
    if(accion){res.status(200).json({length:accion.length,Post:accion})}
    else{res.status(400).json({messege:'no existe ningun post'})}
    console.log({idUS,accion})
}

const getId_idUSER=(req,res)=>{
    const id=req.params.id
    const idUS=req.user.id
    const accion=getPostByIDandIdUser(id,idUS)
    if(accion){res.status(200).json({messege:'All OK',Poust:accion})}
    else{res.status(404).json({ERR:'this id does not exist'})}
}

module.exports={
    createP,
    getXid,
    getPoust,
    upPoust,
    removePoust,
    MyPost,
    getId_idUSER
}