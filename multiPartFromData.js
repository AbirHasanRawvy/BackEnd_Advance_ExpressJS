///Working With Multipart Form Data (File Upload)
const express = require("express");
const multer = require("multer");

const app = express();


//multer storage configaration;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')//where is my file will be save.
 },

 filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + "_" + file.originalname);
  },
});

const upload = multer({storage:storage});

app.post("/upload", upload.single("file"), (req, res)=>{
    res.send(`File upload successfully:  ${req.file.filename}`);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

console.log(Date.now() + '-' + Math.round(Math.random() * 1E9));