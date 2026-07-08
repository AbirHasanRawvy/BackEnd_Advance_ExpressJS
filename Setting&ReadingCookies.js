///Setting and Reading Cookies in Express.js
//app.js
const express = require("express");
const cookiePerser = require("cookieParser");

const app = express();
const port = 5000;

//cookie-parser middleware use;

app.use(cookiePerser());

app.get("/set-cookie", (req, res)=>{
    res.cookie('username', "Alex");
    res.send("Cookie set done!");
});

app.listen(port, () => {
    console.log('Server run http://localhost:${port}');
});