const express= require('express');
const router = express.Router();
const {authMiddleware} = require("../middlewares/authentication");
const {createConfession, allConfessions, userConfession} = require("../controller/confessionController")

router.route("/create/").post(authMiddleware,createConfession);
router.route("/").get(authMiddleware,allConfessions)
// router.route("/:id").get(userConfession)
module.exports =router;