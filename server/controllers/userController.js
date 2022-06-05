// import user model
const { User } = require("../models");
// import sign token function from auth
const { signToken } = require("../utils/auth");

module.exports = {
  // create new user
  async newUser(req, res) {
    try {
      const user = await User.create(req.body);
      const token = signToken(user);
      res.json({ token, user });
    } catch (err) {
      return res.status(400).json({ message: "Please try again" });
    }
  },
// get a single user by their id
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

  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ message: "No User Found" });
      }
      const checkPw = await user.isCorrectPassword(req.body.password);
      if (!checkPw) {
        return res.status(400).json({ message: "Wrong Password" });
      }
      const token = signToken(user);
      res.json({ token, user });
    } catch (err) {
      return res.status(400).json({ message: "Something went wrong" });
    }
  },
};
