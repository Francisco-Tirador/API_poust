const express=require('express')
const RoutePoust=require('./Poust/poust.route').router
const RouteUser=require('./users/users.route').router
const RouteLogin=require('./login/login.route').router
const RouteME=require('./Poust/Rutes.me.protegidas').router
const passport=require('passport')
require('./auth/authMidelwere')(passport)
/////////////////////////////////////

const {port}=require('./config')

/////////////////////////////////////

const app=express()
app.use(express.json())
const path=require('path')//nos busca la ruta del archivo
const multer=require('multer')

////////////////////////////////////


// const storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,path.resolve('uploads/'))
//     },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now() + file.originalname)//!tipo de uso
//         //? podemos agragar cualquier cosa para el nombre 
//         //? date.now()nos brinda la hora +file noda el nombre original de la imagen
//     }
// })
// const upload=multer({storage})
// /////////////////////////////////////
// //! cosas importantes de los metodos de upload
// //? uploand.single('se envia un solo archivo')
// //? upload.array('publica 3 fotos de golpe ni mas ni menos fotos')
// //? upload.filt(publicar una foto asta 3 de golpes tu pones el limite de fotos aqui)
// app.post('/api/v1/upload',upload.single('image'),(req,res)=>{
//     res.status(200).json({messege:path.resolve('iploads/')})
//     //? path.resolve('nos da la direccion de la carpeta que creamos')

// })
////////////////////////////////////
app.get('/api/v1/uploads/:imgName',(req,res)=>{
    const imgName=req.params.imgName
    res.status(200).sendFile(path.resolve('uploads/')+'/'+imgName)
})
//! esta funcion nos da la ruta para poder ver las imagenes desplegadas
////////////////////////////////////


app.use('/api/v1/post/',RouteME)
app.use('/api/v1',RoutePoust)
app.use('/api/v1',RouteUser)
app.use('/api/v1',RouteLogin)


app.listen(port,()=>{
    console.log(`Estardet in the port ${port}`)
})