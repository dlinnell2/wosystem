const router = require("express").Router();
const assetController = require("../../controllers/assetController");

// Matches with "/getAll"
router.route("/getAll")
  .get(assetController.getList)

// Matches with "/addNewWO"
router.route("/add")
  .post(assetController.addNewWO)

router.route("/:id")
  .get(assetController.findById)
  .put(assetController.findByIdAndUpdate)
  
module.exports = router;