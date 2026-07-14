const express = require("express");
const router = require("./src/routes/api");

const app = new express();

module.exports = app;

//Security Middleware;
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
// const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");



//! ENV
const dotENV = require('dotenv');
dotENV.config();


//!Seciruty Middleware implement
app.use(helmet());
// app.use(xss());
app.use(hpp());
app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ limit: "100md" }));

//! Rate Limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 3000,
});
app.use(limiter);


//!data base work;



//Route link
app.use("/api/v1", router)




 module.exports = app;
