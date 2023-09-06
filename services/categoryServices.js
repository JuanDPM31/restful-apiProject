const db = require('../models');
const category = require('../models/category');
const getAllCategory = async () =>{
    try {
        let Categorys = await db.Category.findAll();
        return Categorys;
    } catch (error) {
        throw {status:500, message: error.message || 'Failed to get Articles'}
    }
};
const getCategory = async (id) => {
    try {
        let Article = await db.Article.findByPk(id);
        return Article
    } catch (error) {
        throw {status:500, message: error.message || 'Failed to get Article'}
    }
}
const createCategory = async (name) =>{
    try {
        let newArticle = await  db.Article.create({
            name
        });
        return newArticle
    } catch (error) {
        throw {status:500, message: error.message || 'Article could not be created'}
    }
};
const updateCategory= async (id,name) => {
    try {
        let updateArticle = await db.Article.update({
            name
        },{
            where:{
                id,
            }
        });
        return updateArticle
    } catch (error) {
        throw {status:500, message: error.message || 'Article could not be updated'}
    }
};
const deleteCategory = async(id) =>{
    try {
        const deletedArticle = await db.Article.destroy({
            where:{
                id,
            }
        });
        return deletedArticle;
    } catch (error) {
        throw {status:500, message: error.message || 'Article could not be deleted'}
    }
};
module.exports = {
    getAllCategory,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
};