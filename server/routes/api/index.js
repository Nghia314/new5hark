const router = require("express").Router();
const activityRoutes = require("./activityRoutes");
const userRoutes = require("./userRoutes");
const achievementRoutes = require("./achievementRoutes");

router.use("/activities", activityRoutes);
router.use("/users", userRoutes);
router.use("/achievements", achievementRoutes);

module.exports = router;
