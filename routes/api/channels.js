const express = require("express");
const router = express.Router();

// Channel Model
const Channel = require("../../models/channel");

// @route GET api/channels
// @desc  Get all channels
// @access Public
router.get("/", (req, res) => {
  Channel.find()
    .sort({ uploadDate: -1 })
    .then(channels => res.json(channels));
});

// @route POST api/channels
// @desc  post a channel
// @access Public
router.post("/", (req, res) => {
  const newChannel = new Channel({
    name: req.body.name,
    image: req.body.image
  });

  //save to db
  newChannel
    .save()
    .then(channel => res.json(channel))
    .catch(err => res.status(404).json({ success: false, msg: err }));
});

module.exports = router;
