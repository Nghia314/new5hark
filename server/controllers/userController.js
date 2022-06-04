const { User } = require("../models");

module.exports = {
  newUser(req, res) {
    User.create(req.body)
      .then((act) => res.json(act))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  getUsers(req, res) {
    User.find()
      .then((acts) => res.json(acts))
      .catch((err) => res.status(500).json(err));
  },
};
