const router=require('express').Router()

const httpsUser=require('./users.http')
const passport=require('passport')
require('../auth/authMidelwere')(passport)
//////////////////////////////////////////
router.route('/users')
        .get(httpsUser.getAllUser)
        .post(httpsUser.logionUser)
router.route('/users/:id')
        .get(httpsUser.getByUSER)
        .delete(passport.authenticate('jwt',{session:false}),httpsUser.removeUser)
        .put(passport.authenticate('jwt',{session:false}),httpsUser.upUser)
        


exports.router=router