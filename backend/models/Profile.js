const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String, required: true, unique: true },
  profilePic: { type: Buffer },
  followers: { type: String },
  following: { type: Number },
  name: { type: String },
  category: { type: String },
  bio: { type: String },
  verified: { type: Boolean },
});

const Profile = mongoose.model("Profile", profileSchema); //profiles
module.exports = Profile;
