const express = require("express")
const cors = require("cors")
const {v4} =  require("uuid")
const bodyParser = require("body-parser")
const app = express()
app.use(cors())
app.use(bodyParser.json())
// storage
const { exec } = require('child_process')
const path = require('path')
const multer = require('multer')
var dir = 'public';
var subDirectory = 'public/uploads'
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage:storage})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static('public'))
// firebase
var admin = require("firebase-admin");
var serviceAccount = require("./firebaseAPI.json");
var storageAccount = require("./firebaseStorageAPI.json");
const { getStorage } = require('firebase-admin/storage');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: storageAccount.storageBucket
});
var storage = admin.storage();
var storageRef = admin.storage().bucket();
app.use("/class", require("./routes/class"))
app.use("/uploadcontent", require("./routes/uploadcontent"))
app.use("/content", require("./routes/content"))





app.get("/", (req, res) => {return res.send("Backend Running")})








app.listen(3000, () => {
    console.log("Running on port 3000")
})


