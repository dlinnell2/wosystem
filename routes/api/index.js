const router = require("express").Router();
const woRoutes = require("./wo")
const assetRoutes = require("./asset")

//wo routes
router.use("/orders", woRoutes);

//asset routes
router.use("/assets", assetRoutes);

//location routes

router.use("/locations", locationRoutes)

module.exports = router;