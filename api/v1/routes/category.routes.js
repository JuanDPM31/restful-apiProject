const {Router} = require('express')
const categoryController = require ('../../../controllers/categoryController')
const router  = Router()
router.get('/', categoryController.getAllCategory);
router.get('/:ArticleId', categoryController.getCategory);
router.post ('/', categoryController.createCategory);
router.put ('/:ArticleId',categoryController.updateCategory);
router.delete ('/:ArticleId',categoryController.deleteCategory);

module.exports = router;