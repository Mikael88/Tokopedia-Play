const Video = require("../models/Video");

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: "Failed to get videos" });
  }
};

exports.searchVideos = async (req, res) => {
  try {
    const { videoID, titleImageThumbnail } = req.query;
    const query = {};

    if (videoID) {
      query.videoID = videoID;
    }

    if (titleImageThumbnail) {
      query.titleImageThumbnail = titleImageThumbnail;
    }

    const videos = await Video.find(query);
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: "Error searching videos", error });
  }
};
