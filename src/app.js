const express=require('express')
const RoutePoust=require('./Poust/poust.route').router
const RouteUser=require('./users/users.route').router
const RouteLogin=require('./login/login.route').router
const RouteME=require('./Poust/Rutes.me.protegidas').router
const passport=require('passport')
require('./auth/authMidelwere')(passport)
/////////////////////////////////////
const {port}=require('./config')

////////////////////////////////////
const app=express()
app.use(express.json())
////////////////////////////////////
app.use('/api/v1/post/',RouteME)
app.use('/api/v1',RoutePoust)
app.use('/api/v1',RouteUser)
app.use('/api/v1',RouteLogin)


app.listen(port,()=>{
    console.log(`Estardet in the port ${port}`)
})