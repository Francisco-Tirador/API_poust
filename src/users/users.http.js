const {getUser,getById,createUser,deleteUser,upDateUser,GetMyuser,removeMyUser,upMyuser,updataIMG}=require('./users.controllers')


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
    const accion=deleteUser(id)
    console.log(accion)
   
    if(accion){res.status(200).json({messege:`the user whiht the id ${id}`,length:accion.length,Users:accion})}
    else{res.status(400).json({ERR:'this id does not exist'})}
   
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
const getMyuser=(req,res)=>{
    const id=req.user.id
    const accion=GetMyuser(id)
    if(accion){res.status(200).json(accion)}
    else{res.status(404).json({Err:'this id does not exist banda'})}
    console.log(accion)
}
//? ///////////////////////////////////////////
const deletMyUser=(req,res)=>{
    const id=req.user.id
    const accion=removeMyUser(id)
    if(accion){res.status(200).json({messege:`user deleted correct`})}
    else{res.status(400).json({ERR:'this id does not exist'})}

}
//? ///////////////////////////////////////////
const updateMyuser=(req,res)=>{
    const data=req.body
    const id=req.user.id
    const accion=upMyuser(data,id)
    if(data.name&&data.emeil&&data.password&&data.phone&&data.age){
       res.status(200).json(accion)
    }else{res.status(400).json({ERR:'missing data'})}
}
/////////////////////////////////////////////

const UPDATA=(req,res)=>{
    const idUSER=req.user.id
    const imgURL=req.hostname +':8000' +'/api/v1/uploads/'+req.file.filename
    const data =updataIMG(idUSER,imgURL)
    if(data){res.status(200).json(data)}
    else{res.status(400).json(Error)}
} 

//? ///////////////////////////////////////////
module.exports={
    getAllUser,
    getByUSER,
    logionUser,
    removeUser,
    upUser,
    getMyuser,
    deletMyUser,
    updateMyuser,
    UPDATA
}
/////////////////////////////////////////////