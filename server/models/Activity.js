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
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const Activity = model("activity", activitySchema);

module.exports = Activity;
