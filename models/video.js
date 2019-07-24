const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const VideoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    channel: Schema.Types.ObjectId,
    views: {
        type: Number
    },
    uploadDate:{
        type: Date,
        default: Date.now
    },
    duration:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required:true
    }
});

module.exports = Video = mongoose.model('video',VideoSchema);