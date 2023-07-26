const express = require('express');
const {authMiddleware} = require("../middlewares/authentication");
const { registerUser, authUser, allUsers,deleteUser } = require('../controller/userContoller')
const router = express.Router();
router.route("/").get(authMiddleware,allUsers);
router.route("/").post(registerUser);
router.post('/login', authUser);
router.route("/delete").post(deleteUser);

module.exports = router;