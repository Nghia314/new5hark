const router = require("express").Router();

const {
  newAchievement,
  getAchievements,
} = require("../../controllers/achievementController");

router.route("/").get(getAchievements).post(newAchievement);

module.exports = router;
