const {Router} = require('express');
const router = Router();
const controller = require('../Controllers/studentController')

router.post('/', controller.handleSignup);
router.post('/login', controller.handlelogin);

module.exports = router;