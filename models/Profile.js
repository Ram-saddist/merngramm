const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dotenv = require('dotenv');
dotenv.config();

const ProfileSchema = ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        default:"user"
    },
    bio: {
        type: String,
        default: ''
    },
    pic: {
        type: String,
        default: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    followers: [{
        followerId: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        followerName: {
            type: String,
            required: true
        },
        followerPic: {
            type: String,
            required: true
        }
    }],
    following: [{
        followingId: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        followingName: {
            type: String,
            required: true
        },
        followingPic: {
            type: String,
            required: true
        }
    }],
})

module.exports = Profile = mongoose.model('profile', ProfileSchema);