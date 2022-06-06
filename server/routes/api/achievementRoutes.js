const router = require("express").Router();

const { authMiddleware } = require("../../utils/auth");

const {
  newAchievement,
  getAchievements,
} = require("../../controllers/achievementController");

router.route("/").get(getAchievements).post(authMiddleware, newAchievement);

// router.route("/:achId").put(authMiddleware, updateAchievement);

module.exports = router;
