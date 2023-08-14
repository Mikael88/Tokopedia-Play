const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  videoID: { type: String, required: true },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;