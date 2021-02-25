const router = require("express").Router();
const woRoutes = require("./wo")
const assetRoutes = require("./asset")
const locationRoutes = require("./location")
const userRoutes = require("./user")

//wo routes
router.use("/orders", woRoutes);

//asset routes
router.use("/assets", assetRoutes);

//location routes
router.use("/locations", locationRoutes)

//location routes
router.use("/users", userRoutes)

module.exports = router;