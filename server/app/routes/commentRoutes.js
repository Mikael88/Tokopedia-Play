const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/commentController");

router.get("/", CommentController.getAllComments);

router.get("/video/:videoId", CommentController.getCommentsForVideo);

router.post("/", CommentController.createComment);

module.exports = router;
