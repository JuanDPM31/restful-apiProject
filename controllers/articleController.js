const Articleservice = require('../services/articleServices')
const getAllArticles = async (req,res) =>{
    try {
        const AllArticles = await  Articleservice.getAllArticles();
        res.status(200).send({status: 'OK', data:AllArticles});
    } catch (error) {
        res.status(error.status || 500).send({status: 'FAILED', data:{error: error.message}});
    }
};
const getArticle = async(req,res) => {
    let id = req.params.ArticleId;
    try {
        const Article = await Articleservice.getArticle(id)
        res.status(200).send({status: "OK",data:Article});
    } catch (error) {
        res.status(error.status || 500).send({status: 'FAILED', data:{error: error.message}});
    }
};
const createArticle = async (req,res) => {
    const {body} = req;
    try {
        const createArticle = await Articleservice.createArticle(body.title,body.content,body.UserId);
        res.status(200).send({status: "OK",data: createArticle});
    } catch (error) {
        res.status(error.status || 500).send({status: 'FAILED', data:{error: error.message}});
    }
}
const updateArticle = async (req,res)=>{
    let id = req.params.ArticleId;
    let {name} = req.body;
    try {
        const updateArticle = await Articleservice.updateArticle(id,name);
        res.status(200).send({status:"OK", data:updateArticle})
    } catch (error) {
        res.status(error.status || 500).send({status: 'FAILED', data:{error: error.message}});
    }
}
const deleteArticle = async (req, res) => {
    let id = req.params.ArticleId;
    try {
        const deletedArticle = await Articleservice.deleteArticle(id);
        res.status(200).send({status: "OK", data: deleteArticle});
    } catch (error) {
        res.status(error.status || 500).send({status: 'FAILED', data:{error: error.message}});
    }
};
module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
};