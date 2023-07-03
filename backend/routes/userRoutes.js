const express = require('express');
// import { authMiddleware } from '../middlewares/authentication';
// const {authMiddleware} = require("../middlewares/authentication");
const {registerUser,authUser,allUsers,oneUser}= require('../controller/userContoller')
const router=express.Router();
router.route("/").get(allUsers);
router.route("/").post(registerUser);
router.post('/login',authUser);
router.route("/:id").get(oneUser);


module.exports= router;