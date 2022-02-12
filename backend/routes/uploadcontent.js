const express = require("express")
const router = express.Router()
const {v4} = require("uuid")

var admin = require("firebase-admin");
const db = admin.firestore()
const { FieldValue } = require("firebase/firestore")
const classDB = db.collection("class")
const discussionsDB = db.collection("discussions")


var key = require("../AssemblyAPI.json");
const fs = require('fs');
const axios = require("axios"); 

router.get("/test", async (req, res) => {
    // // UPLOAD FILES
    // var assembly = axios.create({
    //     baseURL: "https://api.assemblyai.com/v2",
    //     headers: {
    //         authorization: key.ASSEMBLYAI_API_KEY,
    //         "content-type": "application/json",
    //         "transfer-encoding": "chunked",
    //     },
    // });
    // const file = "C:/Users/Ryan Lam/Desktop/polyhacks2022/backend/testaudio.mp3";
    // const getURL = async () => {
    //     var url = fs.readFile(file, async (err, data) => {
    //         var res = await assembly.post("/upload", data)
    //         var res = await res.data
    //         console.log(res)
    //         return res
    //     });
    //     return url
    // }
    // var val = await getURL()
    // console.log(val) //giving undefined

    // TRANSCIBE FILES
    var assembly = axios.create({ baseURL: "https://api.assemblyai.com/v2",
        headers: {
            authorization: key.ASSEMBLYAI_API_KEY,
            "content-type": "application/json",
            "auto_chapters": true
        },
    });
    var p2 = await assembly
                .post("/transcript", {
                    audio_url: "https://cdn.assemblyai.com/upload/084e01e6-6531-43ff-ac97-04f8f43eaf7b"
                })
                .then((res) => {
                    return res.data
                })
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
    const getResults = async () => {
        var results = await assembly
                .get(`/transcript/${p2.id}`)
                .then((res) => {
                    return res.data
                })
        if (results.status != 'completed') {
            console.log("Waiting...")
            return await getResults()
        } else {
            return results
        }
    }
    const p3 = await getResults()
    console.log(p3)

    return res.send("Ok")
})

// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// require('dotenv').config();
// import fetch from "node-fetch"











module.exports = router