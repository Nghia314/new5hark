const router = require("express").Router();

const {
  newAchievement,
  getAchievements,
} = require("../../controllers/activityController");

router.route("/").get(getAchievements).post(newAchievement);

module.exports = router;
