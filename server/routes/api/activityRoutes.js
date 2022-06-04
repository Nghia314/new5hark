const router = require("express").Router();
const {
  getActivities,
  newActivity,
} = require("../../controllers/activityController");

router.route("/").get(getActivities).post(newActivity);

module.exports = router;
