const { Schema, model } = require("mongoose");

const activitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const Activity = model("activity", activitySchema);

// Activity.create(
//   {
//     name: "brush teeth",
//     description: "do this every day",
//   },
//   (err) => (err ? handleError(err) : console.log("created"))
// );

module.exports = Activity;
