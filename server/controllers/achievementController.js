const { Achievement, User } = require("../models");

module.exports = {
  async newAchievement({ user, body }, res) {
    const newAch = await Achievement.create({
      // activity (_id)
      // doneToday
      // weeklyCount
      // monthlycount
      ...body,
    });
    if (!newAch) {
      res.status(500).json(err);
    } else {
      // adds to user achievements array
      const upUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { achievements: newAchievement._id } },
        { runValidators: true, new: true }
      );

      // user should be found, but just in case
      !upUser
        ? res.status(202).json({
            achievement: newAch,
            message: "Achievement added, but User invalid",
          })
        : res.json(newAch);
    }
  },

  getAchievements(req, res) {
    Achievement.find()
      .then((acts) => res.json(acts))
      .catch((err) => res.status(500).json(err));
  },

  // updateAchievement({ user, body }, res) {},
};
