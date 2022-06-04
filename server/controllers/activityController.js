const { Activity, User } = require("../models");

module.exports = {
  async newActivity(req, res) {
    const newActivity = await Activity.create(req.body);

    if (!newActivity) {
      res.status(500).json(err);
    } else {
      const upUser = await User.findOneAndUpdate({});
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
          _id: 0,
        },
      });

    !acts ? res.status(404).json("ERR") : res.json(acts);
  },
};
