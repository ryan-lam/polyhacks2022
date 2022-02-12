const express = require("express")
const router = express.Router()
const {v4} = require("uuid")

var admin = require("firebase-admin");
const db = admin.firestore()
const { FieldValue } = require("firebase/firestore")
const classDB = db.collection("class")
const discussionsDB = db.collection("discussions")

router.get("/:classId", (req, res) => {
    return res.send(req.params.classId)
})

router.post("/discussion/:classId", async (req, res) => {
    const {contentType} = req.body
    const classId = req.params.classId
    if (contentType == "post") {
        // requires: classId, contentType, author, title, content
        const discussionId = v4()
        const {author, time, title, content} = req.body
        await discussionsDB.doc(discussionId).set({
            id: discussionId,
            author: author,
            time: time,
            title: title,
            content: content,
            replies: []
        })
        await classDB.doc(classId).update({
            discussions: admin.firestore.FieldValue.arrayUnion(discussionId)
        })
        const newDiscussion = await discussionsDB.doc(discussionId).get()
        console.log(newDiscussion.data())
        return res.json(newDiscussion.data())

    } else if (contentType == "reply") {
        // requires, discussionId, author, time, content
        const {discussionId, author, time, content} = req.body
        await discussionsDB.doc(discussionId).update({
            replies: admin.firestore.FieldValue.arrayUnion({author:author, time:time, content:content})
        })
        const newReply = await discussionsDB.doc(discussionId).get()
        console.log(newReply.data())
        return res.json(newReply.data())

    } else {
        return res.json({data: null})
    }
})



module.exports = router