const express = require("express");
const authenticateToken = require("../middlewares/authMiddleware");
const {
  getAllPosts,
  createPost,
  getPostImage,
  updatePosts,
} = require("../controllers/postController");
const router = express.Router();

router.get("/", getAllPosts);
router.post("/", authenticateToken, createPost);
router.get("/image/:id", getPostImage);
router.put("/:id", authenticateToken, updatePosts);
module.exports = router;
