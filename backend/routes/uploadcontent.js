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
                    audio_url: "https://66.90.84.66.sslip.io/dl2/ZMBN7O4uY_t2Yvx6sYffeH-EnojkTtqz-MmNo93ltWHkFlCbhMbaAUAriETbQWFV2OGIIkha98TpM3aRTQZhYT8yQcDUES9N0AeCg49wreQst7rekgvdFrM2yu5L8CJJbkPK3H4ZUfcUzSIs_Lwzdvu5NbRcW2Ry_Cikx9QPY3dIZ9Wyk9YvVQKZlAGlcgbjSODqNzTd1Uz2P3iNDFTY_a8FnHTywhD4_a1JEFchbq69bFCc_LrMDRgA0n4SQSvzXoO5kZEr6C1gC1-pZ4RMMFc10Md9RxW9a3YwPlk_KhsfXzXS0uUasOtWX3F4gPLuzza9E-GA_93oe4sROJ_htHP6_TGfb5yQjWVdpDWw0t_4PvXugc-gqCvFgjmbfqKCK9EBedf2HcPWDZi_BSrdaUjW8kOWfQNckIEHzpsawpx7S6Lrg-QVOjdXeCr1fIQFDQWxthERiXHHO4TaxRZoJOJkLcDUyQ-4jG3_jbZgx89-A3Wzm82dBSjtkoR6jP50wttyYg-PvEvtMI6WgEwDkOYUy2cxlWgLUHX79IzK0echrQmXBMDXwxYNqSHx05iShKfDMOhV2KxOv69SDSbXL4HTxZxoT-uvJU3q1ZGpy0fk5brTCBi-5ksOkALe5a1t3hIVRTfQQmEqqNUyeP4l-nCUZvqosMf5H_z409g-ToE4koY06cqIbEsFBe1xDKGOrKsz-OWbYYSmXEWeeR9izqfyvgOh_Cref8YLiBS3MKeA0D19R4BDSrd3keCSyVVV0wpKZxgtZTdFI3zSMx1sSFoPVSxQ2m9aF8eAWxJLKDdf8FdjsThG_Qsyqvz7ekhvJSOcSZLoYuoIUdZeDNBzOG0_l7UTytxnyc_V636TdJFk67VyK8ElsqLOVA0LJXUFh0zG8HNYjbxhiLrLef4JjWugpcVH3DRkfxtTtY6sccOPMjjW5WWYs9K7Xo_pw9S4ZEv_imabeO0AwMnTMtb1HmiLYVDqp948OTKFsLZ6HiVHGbfewN99dLgDofI0Ci7W4NYIYYAz1UD5yDzIfC2bUVznhArIuVGC2xErnzJPyfOwSzwej40rsBy-K716YYkhJKp2KQUqq7zn9x3Itq4Y3yAEqK05a-PGZjcHuW-QgFOAdbWP5tIeEndsIFim7S8u_RjJ1Ic_9nJYoDp9JZcZgc_oSHAPSM7vPT416AX2tGPr3ENy55WkFA2aZCuoDl6DUikIjZIKrm00OfbJtTducUINJ0-_MTUX056aoLDgooMjay4W_-EFLyu2d2c41TVKW9Icodfyem43bnJ8nRAGI_YXKuv1s2aCSWLXn9rrm7qPCPHmXA/KxClbFep"
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
            await setTimeout(()=>{}, 5000)
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