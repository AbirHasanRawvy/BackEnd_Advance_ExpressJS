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

//for read the cookies;
app.get('/get-cookies', (req, res)=>{

    let username = req.cookies.username;

    res.send('The user name is: ${userName}');
});

app.listen(port, () => {
    console.log('Server run http://localhost:${port}');
});