// import user model
const { User } = require("../models");
// import sign token function from auth
const { signToken } = require("../utils/auth");

module.exports = {
  // create new user
  async newUser(req, res) {
    const user = await User.create(req.body);

    if (!user) {
      return res.status(400).json({ message: "Please try again" });
    }
    const token = signToken(user);
    res.json({ token, user });
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
// login a user, sign a token, and send it back (to client/src/components/loginform.js)
// {body is destructured req.body}
async login({ body }, res) {
  const user = await User.create(body);

  if (!user) {
    return res.status(400).json({ message: "Something is wrong! "});

  }
  const token = signToken(user);
  res.json({ token, user });
},

};
