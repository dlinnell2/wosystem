const router = require("express").Router();
const woRoutes = require("./wo")
const assetRoutes = require("./asset")

//wo routes
router.use("/wo", woRoutes);

//asset routes
router.use("/asset", assetRoutes);

//asset routes

module.exports = router;