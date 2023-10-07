const express = require("express");
const {
  getAllPosts,
  createPost,
  getPostImage,
  updatePosts,
} = require("../controllers/postController");
const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);
router.get("/image/:id", getPostImage);
router.put("/:id", updatePosts);
module.exports = router;
