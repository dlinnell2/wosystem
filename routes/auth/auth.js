const router = require('express').Router();
userController = require('../../controllers/UserController')

router.route('/register')
    .post(userController.addNew)


module.exports = router;