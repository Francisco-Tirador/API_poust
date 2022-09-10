const path=require('path')
const multer=require('multer')

const estorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.resolve('uploads/'))
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname)
    }
})

const upload=multer({estorage})
exports.upload=upload
