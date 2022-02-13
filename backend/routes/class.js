const express = require("express")
const router = express.Router()
const {v4} = require("uuid")

var admin = require("firebase-admin");
const db = admin.firestore()
const { FieldValue } = require("firebase/firestore")
const classDB = db.collection("class")
const discussionsDB = db.collection("discussions")

router.get("/", async (req, res) => {
    const classes = []
    const classList = await classDB.get()
    classList.forEach((_class) => {classes.push(_class.data())})
    return res.json({data: classes})
})

router.post("/createclass", async (req, res) => {
    const {subject, classCode, teacher} = req.body
    const classId = v4()
    var newClass = await classDB.doc(classId).set({
        id: classId,
        subject: subject,
        classCode: classCode,
        teacher: teacher,
        discussions: [],
        content: []
    })
    newClass = await classDB.doc(classId).get()
    return res.send(newClass.data())
})

router.get("/:classId", async (req, res) => {
    const classId = req.params.classId
    var classDiscussionList = []
    const classDiscussionIdList = (await classDB.doc(classId).get()).data().discussions
    for (discussionId of classDiscussionIdList) {
        const discussion = (await discussionsDB.doc(discussionId).get()).data()
        classDiscussionList.push(discussion)
    }
    console.log(classDiscussionList)
    return res.json({data:classDiscussionList})
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