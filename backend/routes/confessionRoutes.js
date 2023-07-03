const express= require('express');
const router = express.Router();

const {createConfession, allConfessions, userConfession} = require("../controller/confessionController")

router.route("/create/").post(createConfession);
router.route("/").get(allConfessions)
// router.route("/:id").get(userConfession)
module.exports =router;