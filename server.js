//!
import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {

    res.send("Welcome to explore multipart and middleware !!");
});

app.listen(PORT, () => {
    console.log(`Server running on port number ${PORT}`);
});

