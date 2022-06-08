const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");

const {
  login,
  getUsers,
  newUser,
  getOneUser,
  updateUserAchievements,
} = require("../../controllers/userController");

router
  .route("/")
  .get(getUsers)
  .post(newUser)
  .put(authMiddleware, updateUserAchievements);

router.route("/login").post(login);

router.route("/data").get(authMiddleware, getOneUser);

module.exports = router;
