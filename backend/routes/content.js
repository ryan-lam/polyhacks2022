const express = require("express")
const router = express.Router()
const {v4} = require("uuid")

var admin = require("firebase-admin");
const db = admin.firestore()
const { FieldValue } = require("firebase/firestore");
const { json } = require("express");
const classDB = db.collection("class")
const discussionsDB = db.collection("discussions")
const contentDB = db.collection("content")



router.get("/", async (req, res) => {
    const {contentId} = req.body
    const content = await contentDB.doc(contentId).get()
    return res.json({data: content.data()})
})

router.post("/configcontent", async (req, res) => {
    const {timestamps, title, content, contentId, classId} = req.body
    await contentDB.doc(contentId).set({
        title:title,
        classId: classId,
        content:content,
        timestamps:timestamps,
    }, {merge: true})
    const contentItem = await contentDB.doc(contentId).get()
    return res.json({data: contentItem.data()})
})


router.get("/:classId", async (req, res) => {
    const classId = req.params.classId
    var contentList = []
    const content = await contentDB.where("classId", "==", classId).get()
    content.forEach((contentItem) => {contentList.push(contentItem.data())})
    return res.json({data: contentList})
})



router.post("/createcontent", async (req, res) => {
    const contentId = v4()
    const {classId, title, content, videoURL} = req.body
    await contentDB.doc(contentId).set({
        id: contentId,
        classId: classId,
        time: Date.now(),
        title: title,
        content: content,
        videoURL: videoURL
    })
    await classDB.doc(classId).update({
        content: admin.firestore.FieldValue.arrayUnion(contentId)
    })
    const newContent = await contentDB.doc(contentId).get()
    console.log(newContent.data())
    return res.json(newContent.data())
})






module.exports = router