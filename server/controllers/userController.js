// import user model
const { User } = require("../models");
// import sign token function from auth
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
      .select({ __v: 0, password: 0 })
      .populate({
        path: "createdActivities",
        select: { __v: 0, createdBy: 0, _id: 0 },
      })
      .populate({ path: "achievements", select: { __v: 0 } });

    !usrs ? res.status(404).json("ERR") : res.json(usrs);
  },
};
