const mongoose = rquire("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
    featuredImage: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        required:true
    },
    username: {
        type: String,
        required: true,
    },
    categories:{
        type: Array,
        required:true
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);