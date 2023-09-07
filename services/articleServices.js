const db = require('../models');
const article = require('../models/article');
const getAllArticles = async () =>{
    try {
        let Articles = await db.Article.findAll({
            include: {
                model: db.User,
                required: true,
                as: "User",
                attributes: ["id","name","email"],
            },
            attributes: {
                exclude: ['createdAt','updatedAt']
            },
        });
        return Articles;
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
        if (newArticle) {
            const categories = [1,2,3]
            await newArticle.setCategories(categories)
        }
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
        return deletedArticle;
    } catch (error) {
        throw {status:500, message: error.message || 'Article could not be deleted'}
    }
};
module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
};