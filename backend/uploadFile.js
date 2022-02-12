// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// require('dotenv').config();
// import fetch from "node-fetch"
const fs = require('fs');
const axios = require("axios"); 


// // UPLOAD FILES
// var assembly = axios.create({
//     baseURL: "https://api.assemblyai.com/v2",
//     headers: {
//         authorization: process.env.ASSEMBLYAI_API_KEY,
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
        authorization: process.env.ASSEMBLYAI_API_KEY,
        "content-type": "application/json",
        "auto_chapters": true
    },
});
var p2 = await assembly
            .post("/transcript", {
                audio_url: "https://cdn.assemblyai.com/upload/d8fecb8f-466e-4261-be51-ebf47c95f267"
            })
            .then((res) => {
                // console.log(res.data)
                return res.data
            })
            .catch((err) => console.error(err));
console.log(p2)
console.log(p2.id)


// GET RESULTS
var assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: process.env.ASSEMBLYAI_API_KEY,
        "content-type": "application/json",
    },
});
// var p3 = await assembly
//             .get(`/transcript/${p2.id}`)
//             .then((res) => {
//                 // console.log(res.data)
//                 setTimeout(() => {return (res.data)}, 5000)
//             })
//             .catch((err) => console.error(err));

const test3 = async () => {
    var p3 = await assembly
            .get(`/transcript/${p2.id}`)
            .then((res) => {
                // console.log(res.data)
                return res.data
            })
    if (p3.status != 'completed') {
        console.log("Waiting...")
        return await test3()
    } else {
        return p3
    }
}
const pp3 = await test3()
console.log(pp3)