const userService = require ('../services/userServices')

const getAllUsers = async(req,res)=>{
    try {
        const allUsers = await userService.getAllUsers();
        res.status(200).send({status: 'OK', data: allUsers});
    } catch (error) {
        res.status(error.status || 500).send({status: 'FAILED', data:{error: error.message}});
    }
}
const getUser = async(req,res)=>{
    let id = req.params.userId
    try {
        const user = await userService.getUser(id)
        res.status(200).send({status: 'OK', data:user});
    } catch (error) {
        res.status(error.status || 500).send({status: 'FAILED', data:{error: error.message}});
    }
}
const CreateUser = async (req,res)=>{
    const {body} = req
    //console.log(body.name)
    try {
        if (body.name != null && body.email != null && body.phone != null && body.password != null){
            const CreateUser = await userService.CreateUser(body.name,body.email,body.phone, body.password)
            res.status(200).send({status: 'OK', data: CreateUser});
        }else{
            if(body.name == null){
                res.status(400).send({status: 'FAILED', message: 'Falta nombre'});
            }
            if(body.email == null){
                res.status(400).send({status: 'FAILED', message: 'Falta email'});
            }
            if(body.phone == null){
                res.status(400).send({status: 'FAILED', message: 'Falta telefono'});
            }
            if(body.password == null){
                res.status(400).send({status: 'FAILED', message: 'Falta contraseña'});
            }
        }
    } catch (error) {
        res.status(error.status || 500).send({status: 'FAILED', data:{error: error.message}});
    }
}
const updateUser = async(req,res)=>{
    const id = req.params.userId
    let{name,email,phone,password} = req.body;
    try {
        const updateUser = await userService.updateUser(id,name,email,phone,password);
        res.status(200).send({status: 'OK', data:updateUser});
    } catch (error) {
        res.status(error.status || 500).send({status: 'FAILED', data:{error: error.message}});
    }
}
const deleteUser = async(req,res)=>{
    const id = req.params.userId
    try {
        const deleteUser = await userService.deleteUser(id);
        res.status(200).send({status: 'OK', data:deleteUser});
    } catch (error) {
        res.status(error.status || 500).send({status: 'FAILED', data:{error: error.message}});
    }
}
module.exports = {
    getAllUsers,
    getUser,
    CreateUser,
    updateUser,
    deleteUser,
};