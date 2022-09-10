const { assert } = require("chai")
const {describe,it}=require('mocha')

const sum=(a,b)=>{
    return a+b
}

describe('test unitario de mis users',()=>{
    it('deberia retornar 8',()=>{
        const Ejecu=sum(5+5)
        assert.equal(Ejecu,10)
    })
})
// .\node_modules\.bin\mocha 
// ./node_modules/.bin/mocha  .\src\TestingUsers\test1.js