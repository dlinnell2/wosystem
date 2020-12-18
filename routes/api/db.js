const router = require("express").Router();
const dbController = require("../../controllers/dbController");

// Matches with "/getAll"
router.route("/getAll")
  .get(dbController.getList)

// Matches with "/addNewWO"
router.route("/addNewWO")
  .post(dbController.addNewWO)

router.route("/getOne/:id")
  .get(dbController.findById)
  .put(dbController.findByIdAndUpdate)
module.exports = router;