const router = require('express').Router();
const passport = require('passport')
const userController = require('../../controllers/UserController')

router.route('/register')
    .post(userController.addNew)

router.post('/login', passport.authenticate('local', { failureRedirect: '/loginFail' }), function (req, res) {
    res.send('logged in');;
});

router.get('/loggedin', function (req,res) {
    console.log(req.user)
})


module.exports = router;