const {Router} = require('express');
const router = Router();
const userController = require('../Controllers/userController')

router.get('/api/users', userController.getAllUsers);
router.post('/api/users', userController.createUser);
router.get('/api/users/:id', userController.getUserById);
router.patch('/api/users/:id', userController.updateUser);
router.delete('/api/users/:id', userController.deleteUser);

module.exports = router;