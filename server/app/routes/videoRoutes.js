const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");

router.get("/", videoController.getAllVideos);

router.get("/api/videos/search", videoController.searchVideos);

module.exports = router;
