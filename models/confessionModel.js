const mongoose = require("mongoose");

const confessionSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },

    username: { type: String, required: true },
    pfp: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", confessionSchema);

module.exports = Post;
