//!
import express from "express";
import multer from "multer"; 
import path from "path";


const app = express();
const PORT = 5000;

app.use(express.json());

//! Multer setup for file uploading;
const storage = multer.diskStorage({
    destination: (req, File, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + (file.originalname));
    },
});
const upload = multer ({ storage });

//! Create Profile Data;
app.post("/profile", upload.single("Profile image: "), (req, res) => {
    const {username} = req.body;
    const fileInfo = req.file;
    //! database handle;
    res.json({
        message: "Profile created successfully",
        user: {
            username, //username = username;
        },
        file: {
            name: fileInfo.originalname,
            storedName: fileInfo.filename,
            size: fileInfo.size,
        },
    });
});

app.get("/", (req, res) => {

    res.send("Welcome to explore multipart and middleware !!");
});

app.listen(PORT, () => {
    console.log(`Server running on port number ${PORT}`);
});

