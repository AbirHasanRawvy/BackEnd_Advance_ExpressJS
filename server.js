//!
import express from "express";
import multer from "multer"; 
import path from "path";


const app = express();
const PORT = 5000;

//! Multer setup for file uploading;
const storage = multer.diskStorage({
    destination: (req, File, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer ({ storage });

//!

app.get("/", (req, res) => {

    res.send("Welcome to explore multipart and middleware !!");
});

app.listen(PORT, () => {
    console.log(`Server running on port number ${PORT}`);
});

