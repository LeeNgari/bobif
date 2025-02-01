import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title']
    },
    artist:{
        type: String,
        required: [true, 'Please provide an artist']
    },
    releaseYear:{
        type: Number,
        required: [true, 'Please provide a release year']
    },
    songs:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song',
    }],
    imageUrl:{
        type: String,
        required: [true, 'Please provide an image URL']
    },
    }, {
    timestamps: true
})

export const album = mongoose.model('Album', albumSchema);