const {Router} = require('express');
const router = Router();
const controller = require('../controller/customerController')

router.get('/', controller.getAllCustomer);
router.post('/', controller.createCustomer);
router.get('/:id', controller.getCustomerByID);
router.put('/:id', controller.updateCustomerByID);
router.delete('/:id' , controller.deleteCustomerByID);

module.exports = router;