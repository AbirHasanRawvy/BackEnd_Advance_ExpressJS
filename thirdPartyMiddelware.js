///03. Third-party middleware Functions in Express.js.
///Exress rate limit - npm i express-rate-limit.-Its a dos attack solution.
const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");//Helmet: its come to hacking;
const mongoSanitize = require("express-mongo-sanitize");//data safety;
const hpp = require("hpp");//refress all the things;
const cors = require("cors");
const cookieParser = require("cookie-parser");//when we work with cookies;
const morgan = require("morgan");//collect all the information;
const app = express();


const limiter = rateLimit({
    window: 15 * 60 * 1000, //for 15 minutes;
    max:100,
    message:"",

})

app.use(limiter);
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(cors());
app.use(cookieParser());
app.use()
app.use(margan("dev"));


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
//Dos  attack - Over request on the server;

