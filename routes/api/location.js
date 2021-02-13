const router = require("express").Router();
const locationController = require("../../controllers/LocationController");

// Matches with "/getAll"
router.route("/getAll")
  .get(locationController.getAll)

//router.route("/getOne/:id")
  //.get(locationController.getOne)

/*// Matches with "/addNewWO"
router.route("/add")
  .post(locationController.addNewWO)

router.route("/:id")
  .get(locationController.findById)
  .put(locationController.findByIdAndUpdate) */

module.exports = router;