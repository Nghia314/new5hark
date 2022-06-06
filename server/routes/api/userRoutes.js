const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");

const {
  login,
  getUsers,
  newUser,
  getOneUser,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(newUser);

router.route("/login").post(login);

router.route("/data").get(authMiddleware, getOneUser);

module.exports = router;
