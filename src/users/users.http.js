const {getUser,getById,createUser,deleteUser,upDateUser}=require('./users.controllers')


/////////////////////////////////////////////
const getAllUser=(req,res)=>{
    res.status(200).json(getUser())
}
/////////////////////////////////////////////
const getByUSER=(req,res)=>{
    const id=req.params.id
    const accion=getById(id)
    if(accion){res.status(200).json(accion)}
    else{res.status(404).json({Err:'this id does not exist'})}
}
/////////////////////////////////////////////
const logionUser=(req,res)=>{
    const data=req.body
    const accion=createUser(data)
    if(data.name&&data.emeil&&data.password&&data.phone&&data.age){
       res.status(201).json({Users_length:accion.length,Users:accion})  
    } else{res.status(400).json({ERR:'missing data'})}
}
/////////////////////////////////////////////
const removeUser=(req,res)=>{
    const id=req.params.id
    const idUS=req.user.id
    const accion=deleteUser(id,idUS)
    console.log(accion)
    if(idUS===accion.id){
    if(accion){res.status(200).json({messege:`the user whiht the id ${id}`,length:accion.length,Users:accion})}
    else{res.status(400).json({ERR:'this id does not exist'})}}
    else{res.status(400).json({ERR:'you can´t remove this user'})}
}
/////////////////////////////////////////////
const upUser=(req,res)=>{
    const id=req.params.id
    const data=req.body
    const idUS=req.user.id
    const accion=upDateUser(data,id,idUS)
    if(idUS===accion.id){
    if(id!==accion.id){res.status(404).json({ERR:'this id does not exist'})}
    if(data.name&&data.emeil&&data.password&&data.phone&&data.age){
       res.status(200).json(accion)
    }else{res.status(400).json({ERR:'missing data'})}}
    else{res.status(400).json({ERR:'You can´t edited this user'})}
}
/////////////////////////////////////////////
module.exports={
    getAllUser,
    getByUSER,
    logionUser,
    removeUser,
    upUser
}
/////////////////////////////////////////////