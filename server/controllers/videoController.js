const videoModel = require('../models/videoModel');

// Add a new video
exports.addYtVideo = async (req, res) => {
  const { video } = req.body;

  try {
    const result = await videoModel.addVideo(video);

    return res.status(200).json({ message: 'Video Added Sucessfully', result });
    
  } catch (error) {
    return res.status(500).json({ message: 'Error occured while adding video', error });
  }
};

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await videoModel.getAllVideos();
    return res.status(200).json({ message: 'Videos retrieved successfully', videos });
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving Videos', error });
  }
};

exports.deleteVideo = async (req, res) => {
  try {
    const affectedRows = await videoModel.deleteVideo(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete video" });
  }
};

exports.publishVideo = async (req, res) => {
  try {
    const { publish } = req.body;

    // Validate required field
    if (publish === undefined) {
      return res.status(400).json({ message: "'publish' field is required" });
    }

    const affectedRows = await videoModel.publishVideo(req.params.id, publish);

    if (affectedRows === 0) {
      return res.status(404).json({ message: "Video not found or no changes made" });
    }

    res.status(200).json({ message: "Video published successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to publish video" });
  }
};

