const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const VideoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    //channel: Schema.Types.ObjectId,
    channelName: String, //temp
    views: {
        type: String
    },
    uploadDate:{
        type: String,
        default: Date.now.toString()
    },
    duration:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required:true
    }
});

module.exports = Video = mongoose.model('video',VideoSchema);