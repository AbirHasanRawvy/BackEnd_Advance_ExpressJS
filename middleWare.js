///req -> the req is going to client.
///res -> the res coming to server.
/// next -> going to middle ware or root.

const express = require("express");
const app = express();

// express.json()

//simple middleware
// const logger = (req, res, next)=>{
//     console.log("Request received at: ", new Data().toISOString() );
//     next();
// }

let isLog = true

const checkBangladesh = (req, res, next)=>{

    if(isLog){
        next()
    }else{
        res.json({msg:"you are unauth!"});
    }
}

app.use(logger);

app.get("/", checkBangladesh, (req, res) => {
    res.json({
        name: "Alex",
        age: 25,
        profession: "Full Stack Developer",
    });
});

app.listen(5000, () => {
    console.log("Server is ryning!");
});

// middle ware types
// -----------------------------
//Application level middleware
//Route level middleware
//Error handling middleware
//Built in middleware
//Third party middleware

//Middle ware work:
// log in, authentication, request filter, req and res processing
