const router = require("express").Router();
const dbController = require("../../controllers/dbController")

router.route("/db")
    .get(dbController.find);

router.route('/hello')
    .get((req, res) => {
        res.send({ express: 'Connected to server' });
    })

module.exports = router;