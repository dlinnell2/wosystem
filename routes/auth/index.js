const router = require('express').Router();
const passport = require('passport');
const cors = require('cors')
const userController = require('../../controllers/UserController');

router.route('/register')
    .post(userController.addNew)

router.post('/login', passport.authenticate('local', { failureRedirect: '/loginFail' }), function (req, res) {
    res.send('logged in');;
});

router.get('/loggedin', cors(), function (req,res) {
    console.log(req.headers);
    console.log(req.cookies);
    if(req.user){
        res.send(req.user);
    } else {
        res.send(null);
    }
})


module.exports = router;