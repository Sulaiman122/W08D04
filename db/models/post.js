const mongoose = require("mongoose");

const post = new mongoose.Schema(
  {
    desc: { type: String, required: true },
    img: { type: String },
    isDeleted: { type: Boolean, default: false },
    isLiked: { type: mongoose.Schema.Types.ObjectId, ref: "Like" },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", post);
