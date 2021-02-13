const router = require("express").Router();
const woController = require("../../controllers/WOController");

// Matches with "/getAll"
router.route("/getAll")
  .get(woController.getList)

router.route("/getMany")
  .get(woController.getMany)

// Matches with "/addNewWO"
router.route("/add")
  .post(woController.addNewWO)

router.route("/:id")
  .get(woController.findById)
  .put(woController.findByIdAndUpdate)

module.exports = router;