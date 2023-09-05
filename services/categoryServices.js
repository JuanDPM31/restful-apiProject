const db = require('../models');
const category = require('../models/category');
const getAllCategory = async () =>{
    try {
        let Categorys = await db.Category.findAll({
            include: {
                model: db.Article,
                required: true,
                as: "articles",
                attributes: ["id"],
            },
        });
        return Categorys;
    } catch (error) {
        throw {status:500, message: error.message || 'Failed to get Articles'}
    }
};
const getArticle = async (id) => {
    try {
        let Article = await db.Article.findByPk(id);
        return Article
    } catch (error) {
        throw {status:500, message: error.message || 'Failed to get Article'}
    }
}
const createArticle = async (title , content, UserId) =>{
    try {
        let newArticle = await  db.Article.create({
            title,
            content,
            UserId
        });
        return newArticle
    } catch (error) {
        throw {status:500, message: error.message || 'Article could not be created'}
    }
};
const updateArticle = async (id,title,content,UserId) => {
    try {
        let updateArticle = await db.Article.update({
            title,
            content,
            UserId
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
const deleteArticle = async(id) =>{
    try {
        const deletedArticle = await db.Article.destroy({
            where:{
                id,
            }
        });
        return deleteArticle;
    } catch (error) {
        throw {status:500, message: error.message || 'Article could not be deleted'}
    }
};
module.exports = {
    getAllCategory,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
};