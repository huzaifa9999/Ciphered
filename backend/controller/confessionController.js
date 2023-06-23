const asyncHandler = require("express-async-handler");
const Post = require("../models/confessionModel");
const User = require("../models/userModel");

const createConfession = asyncHandler(async (req, res) => {
  try {
    const { userId, description } = req.body;
    const user = await User.findById(userId);
    // console.log(user);
    const newPost = new Post({
      userId: user._id,
      username: user.username,
      pfp: user.pfp,
      description,
    });
    await newPost.save();
    const post = await Post.find();
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
  }
});

const allConfessions= asyncHandler(async(req,res)=>{
  try{
 const confessions = await Post.find({})
 res.send(confessions);
  }catch(error){console.log(error);}
})

module.exports = { createConfession, allConfessions };
