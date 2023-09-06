const Categoryservice = require('../services/categoryServices')
const getAllCategory = async (req,res) =>{
    try {
        const AllCategory = await  Categoryservice.getAllCategories();
        res.status(200).send({status: 'OK', data:AllCategory});
    } catch (error) {
        res.status(error.status || 500).send({status: 'FAILED', data:{error: error.message}});
    }
};
const getCategory = async(req,res) => {
    let id = req.params.CategoryId;
    try {
        const Category = await Categoryservice.getCategory(id)
        res.status(200).send({status: "OK",data:Category});
    } catch (error) {
        res.status(error.status || 500).send({status: 'FAILED', data:{error: error.message}});
    }
};
const createCategory = async (req,res) => {
    const {body} = req;
    try {
        const createCategory = await Categoryservice.createCategory(body.name);
        res.status(200).send({status: "OK",data: createCategory});
    } catch (error) {
        res.status(error.status || 500).send({status: 'FAILED', data:{error: error.message}});
    }
}
const updateCategory = async (req,res)=>{
    let id = req.params.CategoryId;
    let {name} = req.body;
    try {
        const updateCategory = await Categoryservice.updateCategory(id,name);
        res.status(200).send({status:"OK", data:updateCategory})
    } catch (error) {
        res.status(error.status || 500).send({status: 'FAILED', data:{error: error.message}});
    }
}
const deleteCategory = async (req, res) => {
    let id = req.params.CategoryId;
    try {
        const deleteCategory = await Categoryservice.deleteCategory(id);
        res.status(200).send({status: "OK", data: deleteCategory});
    } catch (error) {
        res.status(error.status || 500).send({status: 'FAILED', data:{error: error.message}});
    }
};
module.exports = {
    getAllCategory,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
};