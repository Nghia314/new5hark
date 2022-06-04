const router = require("express").Router();

const { newUser } = require("../../controllers/userController");

router.route("/").get(getUsers).post(newUser);

module.exports = router;
