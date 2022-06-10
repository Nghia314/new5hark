const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");

const {
  getActivities,
  newActivity,
  deleteActivity,
} = require("../../controllers/activityController");

router
  .route("/")
  .get(getActivities)
  .post(authMiddleware, newActivity)
  .delete(authMiddleware, deleteActivity);

module.exports = router;
