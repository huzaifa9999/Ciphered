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

const oneUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});
module.exports = { registerUser, authUser, allUsers, oneUser };
