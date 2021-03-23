const router = require('express').Router();
const passport = require('passport')
const userController = require('../../controllers/UserController')

router.route('/register')
    .post(userController.addNew)

router.post('/login', passport.authenticate('local', { failureRedirect: '/loginFail' }), function (req, res) {
    res.send('logged in');;
});

router.get('/loggedin', function (req,res) {
    console.log(req)
    if(req.user){
        res.send(req.user);
    } else {
        res.send(null);
    }
})


module.exports = router;