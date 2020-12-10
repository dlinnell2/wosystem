const router = require("express").Router();
const dbController = require("../../controllers/dbController")

router.route("/db")
    .get(dbController.find);

module.exports = router;