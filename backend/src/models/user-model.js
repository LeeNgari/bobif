import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please provide a name']
    },
    imageUrl:{
        type: String,
        required: [true, 'Please provide an image URL']
    },
    clerkId:{
        type: String,
        required: [true, 'Please provide a clerk ID'],
        unique: true
    },
    }, {
    timestamps: true
})

export const user = mongoose.model('User', userSchema);