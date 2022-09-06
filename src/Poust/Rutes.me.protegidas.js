const router=require('express').Router()
const http=require('./poust.http')
const passport=require('passport')
require('../auth/authMidelwere')(passport)


router.route('/me')
    .get(passport.authenticate('jwt',{session:false}),http.MyPost)

router.route('/me/:id')
    .get(passport.authenticate('jwt',{session:false}),http.getId_idUSER)

exports.router=router






