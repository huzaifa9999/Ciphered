const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../database/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, username, email, password, pfp } = req.body;

  if (!name || !username || !password || !email) {
    res.status(400);
    throw new Error("please eneter all the fields");
  }
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User exists already");
  }

  const user = await User.create({
    name,
    username,
    email,
    password,
    pfp,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email:user.email,
      username: user.username,
      password: user.password,
      pfp: user.pfp,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create user");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email:user.email,
      pfp: user.pfp,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("invalid username or password");
  }
});

const allUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({}, "username pfp");

    res.send(users);
  } catch (error) {
    console.log(error);
  }
});


const updateUser=asyncHandler(async (req, res) => {

  const user = await User.findById(req.user.id);
  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.name = req.body.name || user.name;
    //This will encrypt automatically in our model
    if (req.body.password) {
      user.password = req.body.password || user.password;
    }

    if(req.body.pfp)
    {
      user.pfp=req.body.pfp||user.pfp
    }

   
    const updateUser = await user.save();
    res.json({
      _id: updateUser._id,
      name: updateUser.name,
      password: updateUser.password,
      pfp: updateUser.pfp,
      email: updateUser.email,
      token: generateToken(updateUser._id),
    });
  } else {
    res.status(401);
    throw new Error('User Not found');
  }

})

module.exports = { registerUser, authUser, allUsers,updateUser };
