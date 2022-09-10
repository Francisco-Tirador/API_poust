const uuid=require('uuid')
const { encriptPassword } = require('../config')

const users=[
    {
        id: "1",
        name: "Alejandra",
        emeil: "Roshlandia@gmail.com",
        password: "$2b$10$/1Zovj/BWkCR.dOtUJLABehxdCH1dWrTuRddEzFzKi.ETVC7VWmP2",
        phone: "5612587665",
        age: 21,
        rol: "normal",
        upIMG:'',
        active: true,
        verified: false
      },
      {
        id: "2",
        name: "Francotirador",
        emeil: "Franco@gmail.com",
        password: "$2b$10$OCE5UWhvY3iOXCL9n6UsCuMV8u2khOG7PhiPgIxkqFhBhlJhNz8da",
        phone: "5612587665",
        age: 21,
        rol: "ADMIN",
        upIMG:'',
        active: true,
        verified: false
      }
]

////////////////////////////////////////////////sadadadas
const getUser=()=>{
    return users
}
////////////////////////////////////////////////
const getById=(id)=>{
    const index=users.findIndex(item=>item.id===id)
    return index!==-1?users[index]:false
}
////////////////////////////////////////////////
const createUser=(data)=>{
    if(data){
        const newUser={
            id:uuid.v4(),
            name: data.name,
            emeil:data.emeil,
            password:encriptPassword(data.password),
            phone:data.phone,
            age: data.age,
            upIMG:data.upIMG?data.upIMG:'',
            rol: "normal",
            active: true,
            verified: false
        }
        users.push(newUser)
        return users
    }
    return false
}
////////////////////////////////////////////////
const deleteUser=(id,idUS)=>{
    const index=users.findIndex(item=>item.id===id)
    if(idUS===index.id){
    if(index!==-1){
        users.splice(index,1)
    return users
    }}else{ return false}
   
}


////////////////////////////////////////////////
const upDateUser=(data,id,idUS)=>{
    const index=users.findIndex(item=>item.id===id)
    if(idUS===index.id){
    if(index!==-1){
        users[index]={
                id:users[index].id,
                name: data.name,
                emeil:data.emeil,
                password:users[index].password,
                phone:data.phone,
                age: data.age,
                upIMG:data.upIMG,
                rol:users[index].rol,
                active:users[index].active,
                verified: users[index].verified
        }
        return users[index]
    }} return false
}
////////////////////////////////////////////////
const login=(emeil)=>{
    const index=users.findIndex(item=>item.emeil===emeil)
    return users[index]
}

////////////////////////////////////////////////

const GetMyuser=(id)=>{
    const index=users.findIndex(item=>item.id===id)
    return index===1?users[index]:false
}
////////////////////////////////////////////////
const removeMyUser=(id)=>{
    const index=users.findIndex(item=>item.id===id)
    if(index!==-1){users.splice(index,1)
        return true
    }
    return false
}
////////////////////////////////////////////////
const upMyuser=(data,id)=>{
    const index=users.findIndex(item=>item.id===id)
    if(index!==-1){
        users[index]={
                id:users[index].id,
                name: data.name,
                emeil:data.emeil,
                password:users[index].password,
                phone:data.phone,
                upIMG:data.upIMG,
                age: data.age,
                rol:users[index].rol,
                active:users[index].active,
                verified: users[index].verified
        }
        return users[index]
    } return false
}
////////////////////////////////////////////////
const updataIMG=(idUSER,imgURL)=>{
    const index=users.findIndex(item=>item.id===idUSER)
    if(index !==-1){
        users[index].upIMG=imgURL
        return users[index]
    }
    return false
}
////////////////////////////////////////////////
module.exports={
    getUser,
    getById,
    createUser,
    deleteUser,
    upDateUser,
    login,
    GetMyuser,
    removeMyUser,
    upMyuser,
    updataIMG
}
////////////////////////////////////////////////