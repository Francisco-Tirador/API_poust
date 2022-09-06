const router=require('express').Router()

const httpLogin=require('./login.http')


router.route('/login')
        .post(httpLogin.login)


exports.router=router