const express = require("express");
const {
  getAllPosts,
  createPost,
  getPostImage,
} = require("../controllers/postController");
const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);
router.get("/image/:id", getPostImage);
module.exports = router;
