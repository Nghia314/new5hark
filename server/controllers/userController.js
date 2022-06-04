const { User } = require("../models");
const { signToken } = require("../utils/auth");

module.exports = {
  async newUser(req, res) {
    const user = await User.create(req.body);

    if (!user) {
      return res.status(400).json({ message: "Please try again" });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  async getUsers(req, res) {
    const usrs = await User.find()
      .select({ __v: 0 })
      .populate({ path: "activity", select: { __v: 0 } })
      .populate({ path: "achievements", select: { __v: 0 } });

    !usrs ? res.status(404).json("ERR") : res.json(usrs);
  },
};
