const router = require('express').Router();
const passport = require('passport');
const cors = require('cors')
const userController = require('../../controllers/UserController');

router.route('/register')
    .post(userController.addNew)

router.post('/login', passport.authenticate('local', { failureRedirect: '/loginFail' }), function (req, res) {
    res.redirect('/auth/loggedin');;
});

router.get('/loggedin', cors(), function (req,res) {
    if(req.user){
        res.send(req.user);
    } else {
        res.send(null);
    }
})


module.exports = router;