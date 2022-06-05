const router = require("express").Router();

const {
  login,
  getUsers,
  newUser,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(newUser);

router.route("/login").post(login);

module.exports = router;
