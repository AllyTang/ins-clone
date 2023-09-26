const express = require("express");
const {
  createProfile,
  getUserProfile,
  getAllProfiles,
} = require("../controllers/profileController");
const router = express.Router();

router.post("/", createProfile);
router.get("/:userID", getUserProfile);
router.get("/", getAllProfiles);
module.exports = router;
