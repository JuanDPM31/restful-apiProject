const db = require('../models')
const  getAllUsers = async()=>{
    try {
        let users = await db.User.findAll()
        return users
    } catch (error) {
        throw {status:500, message: error.message || 'Failer to get users'}
    }
}
const getUser = async(id)=>{
    try {
        let user = await db.User.findByPk(id)
        return user
    } catch (error) {
        throw {status:500, message: error.message || 'Failer to get user'}
    }
}
const CreateUser = async (name,email,phone,password)=>{

    try {
        const newUser = await db.User.create(
            {name,email,phone,password,}
        );
        return newUser
    } catch (error) {
        throw {status:500, message: error.message || 'User could not be created'}
    }
}
const updateUser = async (id,name,email,password) =>{
    try {
        let updateUser = await db.User.update({
            name,email,password,
        },{
            where:{
                id,
            }
        })
        return updateUser
    } catch (error) {
        throw {status:500, message: error.message || 'User could not be updated'}
    }
}
const deleteUser = async (id) =>{
    try {
        const deleteUser = await db.User.destroy({
            where:{
                id,
            }
        })
        return deleteUser
    } catch (error) {
        throw {status:500, message: error.message || 'User could not be deleted'}
    }
}
module.exports = {
    getAllUsers,
    getUser,
    CreateUser,
    updateUser,
    deleteUser
}