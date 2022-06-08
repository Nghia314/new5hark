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

  async getOneUser(req, res) {
    const user = await User.findOne({
      _id: req.user._id,
    })
      .select({ __v: 0, password: 0 })
      .populate({
        path: "createdActivities",
        select: { __v: 0, createdBy: 0 },
      })
      .populate({ path: "achievements", select: { __v: 0 } });
    if (!user) {
      return res.status(400).json({ message: "No user with id found" });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  async login(req, res) {
    try {
      //find user matching user in request
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ message: "No User Found" });
      }
      //authenticate pw
      const checkPw = await user.isCorrectPassword(req.body.password);
      if (!checkPw) {
        return res.status(400).json({ message: "Wrong Password" });
      }
      //sign token including user
      const token = signToken(user);

      res.json({ token, user });
    } catch (err) {
      return res.status(400).json({ message: "Something went wrong" });
    }
  },

  // gets all users
  async getUsers(req, res) {
    const usrs = await User.find()
      .select({ __v: 0, password: 0 })
      .populate({
        path: "createdActivities",
        select: { __v: 0, createdBy: 0 },
      })
      .populate({ path: "achievements", select: { __v: 0 } });

    !usrs ? res.status(404).json("ERR") : res.json(usrs);
  },

  async updateUserAchievements({ user, body }, res) {
    const usr = await User.findOne({ _id: user._id });
  },

  //if we are adding a new achievement it will go to an achievements controller
  // which will push to the user's array of achievements
  // otherwise we will hit this route
  // which will update the achievements that are already there
};
