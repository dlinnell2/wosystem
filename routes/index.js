const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth");
const cors = require('cors');

// API Routes
router.options('/', cors())
router.use("/api", apiRoutes);
router.use("/auth", authRoutes);

module.exports = router;