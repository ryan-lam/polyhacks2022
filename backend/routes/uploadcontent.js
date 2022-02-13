const express = require("express")
const router = express.Router()
const {v4} = require("uuid")
// firebase
var admin = require("firebase-admin");
const { getStorage, ref, getDownloadURL } = require('firebase-admin/storage');
const db = admin.firestore()
const { FieldValue } = require("firebase/firestore")
const classDB = db.collection("class")
const discussionsDB = db.collection("discussions")
var storage = admin.storage();
var storageRef = admin.storage().bucket();
// assembly ai
var key = require("../AssemblyAPI.json");
const fs = require('fs');
const axios = require("axios"); 
// file storage
const { exec } = require('child_process')
const path = require('path')
const multer = require('multer')
const bodyParser = require('body-parser')
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
router.use(bodyParser.urlencoded({extended:false}))
router.use(bodyParser.json())
router.use(express.static('public'))

const getTranscibe = async (fileURL) => {
    console.log("transcribing")
    // TRANSCIBE FILES
    var assembly = axios.create({ baseURL: "https://api.assemblyai.com/v2",
        headers: {
            authorization: key.ASSEMBLYAI_API_KEY,
            "content-type": "application/json",
            "auto_chapters": true,
            "auto_highlights": true
        }
    });
    var p2 = await assembly.post("/transcript", {audio_url: fileURL, "auto_chapters": true})
                            .then((res) => {return res.data})
                            .catch((err) => console.error(err));
    console.log(p2.id)
    // GET RESULTS
    var assembly = axios.create({
        baseURL: "https://api.assemblyai.com/v2",
        headers: {
            authorization: key.ASSEMBLYAI_API_KEY,
            "content-type": "application/json",
        },
    });
    var count = 0
    const getResults = async () => {
        var results = await assembly.get(`/transcript/${p2.id}`)
                                    .then((res) => {return res.data})
        if (results.status != 'completed') {
            console.log(count)
            count = count + 1
            return await getResults()
        } else {
            return results
        }
    }
    const p3 = await getResults()
    console.log(p3)
    return p3
}




router.get('/',(req, res) => {
    res.sendFile(__dirname +'/home.html')
})


router.post('/convert',upload.single('file'), async (req,res,next) => {
    var fileURL = null
    if(req.file){
        // add file to server
        console.log("C:/Users/Ryan Lam/Desktop/polyhacks2022/backend/" + req.file.path)
        const filePath = "C:/Users/Ryan Lam/Desktop/polyhacks2022/backend/" + req.file.path
        const fileName = req.file.path
        // upload file to cloud
        await storageRef.upload(filePath, {
            destination: req.file.path,
          });
        console.log(`${filePath} uploaded to ${storageRef} as ${req.file.path}`);
        // get cloud url
        const options = {
            action: 'read',
            expires: Date.now() + 30 * 60 * 1000, // 30 minutes
          };
        const url = await storageRef.file(fileName).getSignedUrl(options);
        console.log('Generated GET signed URL:');
        fileURL = url[0]
        console.log(fileURL);
    }
    const transcibe = await getTranscibe(fileURL)
    return res.json({fileURL: fileURL, transcribe: transcibe})
})























module.exports = router

// assembly api extra
    // UPLOAD FILES
    // var assembly = axios.create({
    //     baseURL: "https://api.assemblyai.com/v2",
    //     headers: {
    //         authorization: key.ASSEMBLYAI_API_KEY,
    //         "content-type": "application/json",
    //         "transfer-encoding": "chunked",
    //     },
    // });
    // const file = "C:/Users/Ryan Lam/Desktop/polyhacks2022/backend/testaudio.mp3";
    // var val = null
    // const getURL = async () => {
    //     fs.readFile(file, async (err, data) => {
    //         var res = await assembly.post("/upload", data)
    //         var res = await res.data
    //         val = res
    //         console.log(val)
    //     });
    // }
    // // await getURL()
    // // var val = await getURL()
    // // console.log(val)
    // //giving undefined
 // // router.get("/test", async (req, res) => {
    //     // TRANSCIBE FILES
    //     var assembly = axios.create({ baseURL: "https://api.assemblyai.com/v2",
    //         headers: {
    //             authorization: key.ASSEMBLYAI_API_KEY,
    //             "content-type": "application/json",
    //             "auto_chapters": true
    //         },
    //     });
    //     var p2 = await assembly
    //                 .post("/transcript", {
    //                     audio_url: "https://github.com/ryan-lam/polyhacks2022/raw/f4c35267844af126bd370f627fde831b30a30fb3/backend/test2audio.mp3",
    //                     "auto_chapters": true
    //                 })
    //                 .then((res) => {
    //                     return res.data
    //                 })
    //                 .catch((err) => console.error(err));
    //     console.log(p2.id)
    //     // GET RESULTS
    //     var assembly = axios.create({
    //         baseURL: "https://api.assemblyai.com/v2",
    //         headers: {
    //             authorization: key.ASSEMBLYAI_API_KEY,
    //             "content-type": "application/json",
    //         },
    //     });
    //     var count = 0
    //     const getResults = async () => {
    //         var results = await assembly
    //                 .get(`/transcript/${p2.id}`)
    //                 .then((res) => {
    //                     return res.data
    //                 })
    //         if (results.status != 'completed') {
    //             console.log(count)
    //             count = count + 1
    //             return await getResults()
    //         } else {
    //             return results
    //         }
    //     }
    //     const p3 = await getResults()
    //     console.log(p3)
    //     return res.send("Ok")
    // })
    