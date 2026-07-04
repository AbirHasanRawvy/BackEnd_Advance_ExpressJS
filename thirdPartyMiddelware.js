///03. Third-party middleware Functions in Express.js.
///Exress rate limit - npm i express-rate-limit.-Its a dos attack solution.
const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();


const limiter = rateLimit({
    window: 15 * 60 * 1000, //for 15 minutes;
    max:100,
    message:"",

})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
//Dos  attack - Over request on the server;