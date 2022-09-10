const { comparePassword } = require("../config")

const byemeil=require("../users/users.controllers").login

const Login=(data)=>{
    const loginEmeil=byemeil(data.emeil)
    if(loginEmeil){
        const comprovacion=comparePassword(data.password,loginEmeil.password)
        if(comprovacion){return loginEmeil}else{return false}
    }
}
// console.log(Login({emeil:"Roshlandia@gmail.com",password:"Goku1234"}))

exports.Login=Login