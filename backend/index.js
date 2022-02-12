// import express from "express"
const express = require("express")
// import cors from "cors"
const cors = require("cors")
// import {v4} from "uuid"
const {v4} = require("uuid")
// import bodyParser from "body-parser"
const bodyParser = require("body-parser")

const app = express()
app.use(cors())
app.use(bodyParser.json())

// import admin from "firebase-admin"
var admin = require("firebase-admin");
// import serviceAccount from "./firebaseAPI"
var serviceAccount = require("./firebaseAPI.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use("/class", require("./routes/class"))
app.use("/uploadcontent", require("./routes/uploadcontent"))






app.get("/", (req, res) => {return res.send("Backend Running")})








app.listen(3000, () => {
    console.log("Running on port 3000")
})


