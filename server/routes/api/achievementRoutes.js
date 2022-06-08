const router = require("express").Router();

const { authMiddleware } = require("../../utils/auth");

const {
  newAchievement,
  getAchievements,
} = require("../../controllers/achievementController");

router.route("/").get(getAchievements).post(authMiddleware, newAchievement);

module.exports = router;
