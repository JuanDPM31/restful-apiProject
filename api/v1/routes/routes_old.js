const db = require('../../../models');//requerimos modelos
const {Router} = require('express');//requerimos Router Framework
const router = new Router();

router.get('/',(req,res)=>{
    console.log("get ruta Ppal");
    res.send({Title:'Saludos ADSO!'})
})
router.post('/new', async(req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.password;
    let password = req.body.password;
    try {
        await db.User.create({
            name,
            email,
            phone,
            password
        });
        res.status(200).send({status:'OK',message:"User Created! "});
    } catch (error) {
        res.status(400).send('User could not be created');
    }
    
})
module.exports = router;