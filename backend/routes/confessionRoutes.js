const express= require('express');
const router = express.Router();

const {createConfession, allConfessions} = require("../controller/confessionController")

router.route("/create").post(createConfession);
router.route("/").get(allConfessions)

module.exports =router;