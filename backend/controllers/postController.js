const Post = require("../models/Post");
const mongoose = require("mongoose");

const getAllPosts = (req, res) => {
  Post.find({})
    .then((posts) => {
      if (!posts) {
        return res.status(404).json({ message: "No post found" });
      }
      return res.status(200).json(posts);
    })
    .catch((err) => {
      console.error("Error fetching posts:", err);
      return res.status(500).json({ message: "Internal server error" });
    });
};

const createPost = async (req, res) => {
  console.log("body", req.body);
  try {
    const {
      userID,
      profilePic,
      location,
      name,
      likes,
      isLiked,
      caption,
      comments,
      postID,
    } = req.body;
    const postLink = req.files.postLink.data;
    //create a new post document
    const newPost = new Post({
      userID,
      profilePic,
      location,
      postLink,
      name,
      likes,
      isLiked,
      caption,
      comments,
      postID,
    });
    //save the new post document to the db
    await newPost.save();
    res
      .status(201)
      .json({ message: "Post created sucessfully", post: newPost });
  } catch (error) {
    console.error("Error creating posts:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getPostImage = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);
    if (!post || !post.postLink) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.contentType("image/png");
    res.send(post.postLink);
  } catch (error) {
    console.error("Error serving image:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updatePosts = async (req, res) => {
  try {
    const { id } = req.params;
    const { likes, isLiked, comments } = req.body;
    //convert id to ObjectId
    const postObjectId = new mongoose.Types.ObjectId(id);
    const updatedFields = {};
    if (likes !== undefined) {
      updatedFields.likes = likes;
    }
    if (comments !== undefined) {
      updatedFields.comments = comments;
    }
    if (isLiked !== undefined) {
      updatedFields.isLiked = isLiked;
    }
    const updatedPost = await Post.findOneAndUpdate(
      { _id: postObjectId },
      { $set: updatedFields }, // use $set to update specific fields
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(updatedPost);
  } catch (error) {
    console.error("Error updating post data:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { getAllPosts, createPost, getPostImage, updatePosts };
