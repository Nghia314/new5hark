const router = require("express").Router();
const activityRoutes = require("./activityRoutes");

router.use("/activities", activityRoutes);

module.exports = router;
