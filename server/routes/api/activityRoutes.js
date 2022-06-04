const router = require("express").Router();
const { newActivity } = require("../../controllers/activityController");

router.route("/").post(newActivity);

module.exports = router;
