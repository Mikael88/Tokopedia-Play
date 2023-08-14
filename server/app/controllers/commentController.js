const Comment = require("../models/Comment");

module.exports = {
  getAllComments: async (req, res) => {
    try {
      const comments = await Comment.find();
      res.json(comments);
    } catch (error) {
      res.status(500).json({ message: "Error fetching comments", error });
    }
  },

  getCommentsForVideo: async (req, res) => {
    try {
      const videoId = req.params.videoId;
      const comments = await Comment.find({ videoID: videoId });
      res.json(comments);
    } catch (error) {
      res.status(500).json({ message: "Error fetching comments", error });
    }
  },

  createComment: async (req, res) => {
    try {
      const { videoID, username, comment } = req.body;
      const newComment = new Comment({
        videoID: videoID,
        username: username,
        comment: comment,
      });
      await newComment.save();
      res.json(newComment);
    } catch (error) {
      res.status(500).json({ message: "Error creating comment", error });
    }
  },
};
