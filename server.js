//!
import express from "express";
import multer from "multer"; 
import path from "path";


const app = express();
const PORT = 5000;

app.use(express.json());

//! Application type middle ware;
// Runs for every request;
app.use((req, res, next) => {//! here app.use means work for all the aplication;
    console.log(`${req.method} ${req.url}`);
    next();
});

//Rout middleware: for a spacipic request.
const isAuthenticated = (req, res, next) => {
    const token = req.headers("authorization");
    if(token === "createProfile"){
        next();
    }else{
        res.status(401).json({
            message: "You are not authorized",
        });
    }
};


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

//! Create Profile Data with file;
app.post("/profile", isAuthenticated, upload.single("Profile image: "), (req, res) => {
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

