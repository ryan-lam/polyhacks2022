const express = require("express")
const router = express.Router()
const {v4} = require("uuid")

var admin = require("firebase-admin");
const db = admin.firestore()
const { FieldValue } = require("firebase/firestore")
const classDB = db.collection("class")
const discussionsDB = db.collection("discussions")



// const {API_KEY} = require("../AssemblyAPI.json");

router.get("/test", async (req, res) => {

})




module.exports = router