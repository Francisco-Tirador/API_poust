const uuid=require('uuid')
////////////////////////////////////////////////sadadadas
const Poust=[
{
    id: "3",
    tittle: "Nuevo Poust",
    content: "content",
    user_id: "45",
    published: true
  },
  {
    id: "del2",
    tittle: "Nuevo del 2",
    content: "aqui hay contenido",
    user_id: "2",
    published: true
  },
  
  {
    id: "del22",
    tittle: "otro del numero 2",
    content: "aqui hay contenido",
    user_id: "2",
    published: true
  },
  {
    id: "del23",
    tittle: "otro de nuevo del 2",
    content: "aqui hay contenido",
    user_id: "2",
    published: true
  }
]
////////////////////////////////////////////////

const getAllPoust=()=>{
    return Poust
}
////////////////////////////////////////////////
const getById=(id)=>{
    const index=Poust.findIndex(item=>item.id===id)
    return index!==-1?Poust[index]:false
}
////////////////////////////////////////////////
const createUser=(data,idUS)=>{
    if(data){
        const newPoust={
            id:uuid.v4(),
            tittle:data.tittle,
            content:data.content,
            user_id:idUS,
            published:true
        }
        Poust.push(newPoust)
        return Poust
    }
    return false
}
////////////////////////////////////////////////
const deleteUser=(id,idUS)=>{
    const errID=800
    const index=Poust.findIndex(item=>item.id===id)
    if(Poust[index].user_id===idUS){
    if(index!==-1){
        Poust.splice(index,1)
    return Poust
    }}
    return false
}
////////////////////////////////////////////////
const upDateUser=(data,id,idUS)=>{
    const index=Poust.findIndex(item=>item.id===id)
    if(idUS===Poust[index].user_id){
    if(index!==-1){
        Poust[index]={
            id:Poust[index].id,        tittle:data.tittle,
            content:data.content,
            user_id:Poust[index].user_id,
            published:true
        }
        return Poust[index]
    } }
    return false
}
const creadoporUser=(idUS)=>{
    const totales=Poust.filter(item=>item.user_id===idUS)
   return totales.length?totales:false
}


const getPostByIDandIdUser=(id,idUS)=>{
    const index=Poust.filter(item=>item.user_id===idUS)
    const index2=index.filter(item=>item.id===id)
    return index2.length?index2:false
}

module.exports={
    getAllPoust,
    getById,
    createUser,
    deleteUser,
    upDateUser,
    creadoporUser,
    getPostByIDandIdUser
}