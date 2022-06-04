const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  achievements: [
    {
      type: Schema.Types.ObjectId,
      ref: "achievement",
    },
  ],
  createdActivities: [
    {
      type: Schema.Types.ObjectId,
      ref: "activity",
    },
  ],
});

const User = model("user", userSchema);

module.exports = User;
