const {Router} = require('express')
const categoryController = require ('../../../controllers/categoryController')
const router  = Router()
router.get('/', categoryController.getAllCategory);
router.get('/:CategoryId', categoryController.getCategory);
router.post ('/', categoryController.createCategory);
router.put ('/:CategoryId',categoryController.updateCategory);
router.delete ('/:CategoryId',categoryController.deleteCategory);

module.exports = router;