const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String, 
      required: true, 
      unique: true
    },
    email: {
      type: String, 
      required: true, 
      unique: true
    },
    password: {
      type: String, 
      required: true
    },
    profilePic: {
      type: String
    },
    MissionsAdded: [{
      type: Schema.Types.ObjectId, 
      ref: 'Missions'}
    ],
    MissionsCreated: [{
      type: Schema.Types.ObjectId, 
      ref: 'Missions'
    }]
  }
);

const User = model("User", userSchema);

module.exports = User;
