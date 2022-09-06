const bcrypt=require('bcrypt')
require('dotenv').config()

//? ///////////////////////////////
const port=process.env.PORT
//! ///////////////////////////////
const encriptPassword=(plainPassword)=>{
    const encrypt=bcrypt.hashSync(plainPassword,10)
    return encrypt
}

const comparePassword=(plainPassword,hashePassword)=>{
    return bcrypt.compareSync(plainPassword,hashePassword)
}

//? ///////////////////////////////



module.exports={
    port,
    encriptPassword,
    comparePassword
}