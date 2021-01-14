const router = require("express").Router();
const woRoutes = require("./wo")

//wo routes
router.use("/wo", woRoutes);

//asset routes

module.exports = router;