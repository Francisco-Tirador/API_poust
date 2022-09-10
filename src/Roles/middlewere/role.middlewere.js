const rolesmiddlewere=(req,res,next)=>{
    const rol=req.user.rol
    if(rol==='ADMIN'){next()}
    else{res.status(401).json({ERR:'Your no tienes credenciales para esto'})}
}

exports.Rolesautorizate=rolesmiddlewere