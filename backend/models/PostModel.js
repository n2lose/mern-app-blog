import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true,
        default: 'Anonymous'
    },
    attachment: String,
    likedCount: {
        type: String,
        default: 0
    }
}, {timestamps: true})

export const PostModel = mongoose.model('Post', postSchema)