const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");

const {
  getActivities,
  newActivity,
} = require("../../controllers/activityController");

router.route("/").get(getActivities).post(authMiddleware, newActivity);

module.exports = router;
