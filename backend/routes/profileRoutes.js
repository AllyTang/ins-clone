const express = require("express");
const {
  createProfile,
  getUserProfile,
  getAllProfiles,
  getProfileImage,
} = require("../controllers/profileController");
const router = express.Router();

router.post("/", createProfile);
router.get("/:userID", getUserProfile);
router.get("/", getAllProfiles);
router.get("/image/:userID", getProfileImage);
module.exports = router;
