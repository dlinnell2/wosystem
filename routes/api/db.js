const router = require("express").Router();
const dbController = require("../../controllers/dbController");

// Matches with "/getAll"
router.route("/getAll")
  .get(dbController.getList)

// Matches with "/api/books/:id"
//router
  //.route("/:id")
  //.get(booksController.findById)
  //.put(booksController.update)
  //.delete(booksController.remove);

module.exports = router;