const express = require("express")
const cors = require("cors")
const {v4} = require("uuid")
const bodyParser = require("body-parser")

const app = express()
app.use(cors())
app.use(bodyParser.json())

var admin = require("firebase-admin");
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


