import mongoose from 'mongoose';

const songsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title']
    },
    artist:{
        type: String,
        required: [true, 'Please provide an artist']
    },
    audioUrl:{
        type: String,
        required: [true, 'Please provide an audio URL']
    },
    duration:{
        type: Number,
        required: [true, 'Please provide a duration']
    },
    albumId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        required:false
    },
    imageUrl:{
        type: String,
        required: [true, 'Please provide an image URL']
    },
    }, {
    timestamps: true
})

export const song = mongoose.model('Song', songsSchema);