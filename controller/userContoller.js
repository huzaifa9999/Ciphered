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
      email: user.email,
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
      email: user.email,
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
    const users = await User.find({}, "username pfp").sort({ username: 1 });

    res.send(users);
  } catch (error) {
    console.log(error);
  }
});



const deleteUser = asyncHandler(async (req, res) => {
  const email = req.body;
  const confirm = User.findOne({ email: email });
  const user = User.findById(req.params.id);

  if (user?.email === confirm?.email) {

    res.json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      pfp: user.pfp,
    });
    await User.deleteOne({ _id: req.params.id });
    res.status(201)
    alert('user deleted');
  }
  else {
    res.status(409)
    throw new Error("invalid email");
  }
})


module.exports = { registerUser, authUser, allUsers, deleteUser };
