const router=require('express').Router()
const httpsUser=require('./users.http')
const multer=require('multer')
const passport=require('passport')
require('../auth/authMidelwere')(passport)
const {Rolesautorizate}=require('../Roles/middlewere/role.middlewere')
const { upload } = require('../utillsa/upload')

//////////////////////////////////////////

router.route('/uploads')
        .post(passport.authenticate('jwt',{session:false}),upload.single('image'),httpsUser.UPDATA)

router.route('/users')
        .get(httpsUser.getAllUser)
        .post(httpsUser.logionUser)


        router.route('/users/:id')
        .get(httpsUser.getByUSER)
        .delete(passport.authenticate('jwt',{session:false}),Rolesautorizate,httpsUser.removeUser)
        .put(passport.authenticate('jwt',{session:false}),Rolesautorizate,httpsUser.upUser)
        
router.route('/user/me')
        .get(passport.authenticate('jwt',{session:false}),httpsUser.getMyuser)
        .delete(passport.authenticate('jwt',{session:false}),httpsUser.deletMyUser)
        .put(passport.authenticate('jwt',{session:false}),httpsUser.updateMyuser)


exports.router=router