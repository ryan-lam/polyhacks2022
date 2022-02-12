const express = require("express")
const router = express.Router()
const {v4} = require("uuid")

var admin = require("firebase-admin");
const { Router } = require("express");
const db = admin.firestore()

router.get("/:classId", (req, res) => {
    console.log("Hi")
    res.send(req.params.classId)
})




module.exports = router