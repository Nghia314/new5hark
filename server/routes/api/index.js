const router = require("express").Router();
const activityRoutes = require("./activityRoutes");
const userRoutes = require("./userRoutes.js");

router.use("/activities", activityRoutes);
router.use("/users", userRoutes);

module.exports = router;
