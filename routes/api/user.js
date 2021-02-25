const router = require("express").Router();
const userController = require("../../controllers/UserController");

// Matches with "/addNewWO"
router.route("/add")
    .post(userController.addNew)

module.exports = router;