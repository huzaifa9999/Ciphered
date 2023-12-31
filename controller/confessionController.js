const asyncHandler = require("express-async-handler");
const Post = require("../models/confessionModel");
const User = require("../models/userModel");

const createConfession = asyncHandler(async (req, res) => {
  try {
    const { userId, description } = req.body;
    const user = await User.findById(userId);
    const newPost = await Post.create({
     
      username: user.username,
      userId:userId,
      pfp: user.pfp,
      description,
    })
    if(newPost)
    {
      res.status(201).json(
        {
          _id: newPost._id,
          description: newPost.description,
          username: newPost.username,
          userId: user._id,
          pfp: newPost.pfp,

        }
      )
    }
  } catch (error) {
    console.log(error);
  }
});

const allConfessions= asyncHandler(async(req,res)=>{
  try{
 const confessions = await Post.find({}).sort({ _id: -1 });
 res.send(confessions);
  }catch(error){console.log(error);}
})
const userConfession= asyncHandler(async(req,res)=>{
  try{
    // const {userId}=req.body;
const confession = await Post.find({userId:req.params.id});
res.send(confession);

  }catch(error){console.log(error);}
})



module.exports = { createConfession, allConfessions,userConfession };
