const express = require("express")
const router = express.Router()
const {v4} = require("uuid")

var admin = require("firebase-admin");
const db = admin.firestore()
const { FieldValue } = require("firebase/firestore")
const classDB = db.collection("class")
const discussionsDB = db.collection("discussions")
const contentDB = db.collection("content")


router.get("/:classId", async (req, res) => {
    const classId = req.params.classId
    var contentList = []
    const content = await contentDB.where("classId", "==", classId).get()
    content.forEach((contentItem) => {contentList.push(contentItem.data())})
})

// router.post("/createcontent", async (req, res) => {

// })






module.exports = router