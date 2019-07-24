const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ChannelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required:true
    }
});

module.exports = Channel = mongoose.model('channel',ChannelSchema);