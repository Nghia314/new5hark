const router = require("express").Router();

const { getUsers, newUser } = require("../../controllers/userController");

router.route("/").get(getUsers).post(newUser);

module.exports = router;
