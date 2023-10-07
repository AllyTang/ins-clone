const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  profilePic: { type: String },
  location: { type: String },
  postLink: { type: Buffer },
  name: { type: String },
  likes: { type: String },
  isLiked: { type: Boolean },
  caption: { type: String },
  comments: { type: Array },
  postID: { type: Number, required: true, unique: true },
});

const Post = mongoose.model("Post", postSchema); //posts
module.exports = Post;
