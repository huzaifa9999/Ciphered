const express = require('express');
// import { authMiddleware } from '../middlewares/authentication';
// const {authMiddleware} = require("../middlewares/authentication");
const { registerUser, authUser, allUsers,updateUser,deleteUser } = require('../controller/userContoller')
const router = express.Router();
router.route("/").get(allUsers);
router.route("/").post(registerUser);
router.post('/login', authUser);
// router.route("/:id").get(oneUser);
router.route("/update/:id").patch(updateUser);
router.route("/delete/:id").post(deleteUser);


module.exports = router;