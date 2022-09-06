const router=require('express').Router()

const http=require('./poust.http')
const passport=require('passport')
require('../auth/authMidelwere')(passport)
////////////////////////////////////////////

router.route('/post')
        .get(http.getPoust)
        .post(passport.authenticate('jwt',{session:false}),http.createP)

router.route('/post/:id')
        .put(passport.authenticate('jwt',{session:false}),http.upPoust)
        .delete(passport.authenticate('jwt',{session:false}),http.removePoust)
        .get(http.getXid)


exports.router=router