const db = require('../models')//Requirimos los modelos
const {Router} = require('express')//Requerimos router del framework
const router = new Router() //Creamos una instancia

router.get('/',(req,res)=>{
    console.log("get ruta principal")
    res.send({Tittle:'Saludos ADSO!'})
})
router.post('/new',async (req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let password = req.body.password;
    try {
        await db.User.create({
            name,
            email,
            phone,
            password
        })
        res.status(200).send({status:"OK", message:"User created"})
    } catch (error) {
        res.status(400).send('User could not be created')
    }
})
router.get('/all',async (req,res)=>{
    try{
        let users = await db.User.findAll();
        res.status(200).send({status:"OK", message:"Users listed",data:users})
    }catch(error){
        res.status(400).send({status:"FAIL", message:"Users error",data:null})
    }
})
router.get('/:id',async (req,res)=>{
    try{
        let id = req.params.id;
        let users = await db.User.findByPk(id);
        res.status(200).send(users)
    }catch(error){
        res.status(400).send({status:"FAIL", message:"No se pudo obtener el usuario"})
    }
})
router.put('/:id',async (req,res)=>{
    try{
        let id = req.params.id;
        let {name, email,phone,password} = req.body;
        await db.User.update(
            {name, email,phone,password},
            {
                where:{
                    id,
                }
            }
        );
        res.status(200).send("Usuario acutualizado correctamente")
    }catch(error){
        res.status(400).send({message:"No se pudo actualizar el usuario"})
    }
})
router.delete('/:id',async (req,res)=>{
    try{
        let id = req.params.id;
        await db.User.destroy({
            where:{
                id,
            }
        });
        res.status(200).send("Usuario eliminado correctamente")
    }catch(error){
        res.status(400).send({message:"No se pudo eliminar el usuario"})
    }
})
module.exports = router