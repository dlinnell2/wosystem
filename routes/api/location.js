const router = require("express").Router();
const locationController = require("../../controllers/LocationController");

// Matches with "/getAll"
router.route("/getAll")
  .get(locationController.getAll)

router.route("/getMany")
  .get(locationController.getMany)

// Matches with "/add"
router.route("/add")
  .post(locationController.addNew)

/*router.route("/:id")
  .get(locationController.findById)
  .put(locationController.findByIdAndUpdate) */

module.exports = router;