const router = require("express").Router();
const dbRoutes = require("./db")

//database routes
router.use("/db", dbRoutes);

module.exports = router;