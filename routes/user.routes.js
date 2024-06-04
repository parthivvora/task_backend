const express = require("express")
const { insertData, getData } = require("../controllers/user.controllers")
const router = express.Router()

router.post("/insertData", insertData)
router.get("/getData", getData)

module.exports = router