const express = require("express");
const router = express.Router();

// Video Model
const Video = require("../../models/video");

// @route GET api/videos
// @desc  Get all videos
// @access Public
router.get("/", (req, res) => {
  Video.find()
    .sort({ uploadDate: -1 })
    .then(videos => res.json(videos));
});

// @route POST api/videos
// @desc  create a video
// @access Public
router.post("/", (req, res) => {
  const newVideo = new Video({
    title: req.body.title,
    views: req.body.views,
    channel: req.body.channel,
    uploadDate: req.body.uploadDate,
    duration: req.body.duration,
    image: req.body.image
  });

    // save to database
  newVideo
    .save()
    .then(video => res.json(video))
    .catch(err => res.status(404).json({success: false, msg: err}));
});

module.exports = router;
