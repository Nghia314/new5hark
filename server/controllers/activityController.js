const { Activity } = require("../models");

module.exports = {
  newActivity(req, res) {
    Activity.create(req.body)
      .then((act) => res.json(act))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
};
