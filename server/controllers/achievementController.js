const { Achievement } = require("../models");

module.exports = {
  newAchievement(req, res) {
    Achievement.create(req.body)
      .then((act) => res.json(act))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  getAchievements(req, res) {
    Achievement.find()
      .then((acts) => res.json(acts))
      .catch((err) => res.status(500).json(err));
  },
};
