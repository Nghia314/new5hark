const { Activity, User } = require("../models");

module.exports = {
  async newActivity({ user, body }, res) {
    const newActivity = await Activity.create({
      ...body,
      createdBy: user._id,
    });

    if (!newActivity) {
      res.status(500).json(err);
    } else {
      // adds to users createdActivities array
      const upUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { createdActivities: newActivity._id } },
        { runValidators: true, new: true }
      );

      // if user found all good, otherwise activity still added
      !upUser
        ? res.status(202).json({
            activity: newActivity,
            message: "Activity added but no User with given ID found",
          })
        : res.json(newActivity);
    }
  },

  async getActivities(req, res) {
    const acts = await Activity.find()
      .select({ __v: 0 })
      .populate({
        path: "createdBy",
        select: {
          __v: 0,
          createdActivities: 0,
          password: 0,
          achievements: 0,
        },
      });

    !acts ? res.status(404).json("ERR") : res.json(acts);
  },

  async deleteActivity({ user, body }, res) {
    console.log(body._id);
    const updateUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $pull: { createdActivities: { _id: body._id } } },
      { new: true }
    );
    console.log(updateUser);
    !updateUser
      ? res.status(404).json({ message: "There was an error" })
      : res.json(updateUser);
  },
};
