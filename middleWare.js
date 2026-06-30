///req -> the req is going to client.
///res -> the res coming to server.
/// next -> going to middle ware or root.

const express = require("express");
const app = express();

//simple middleware
const logger = (req, res, next)=>{
    console.log("Request received at: ", new Data().toISOString() );
    next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.json({
        name: "Alex",
        age: 25,
        profession: "Full Stack Developer",
    });
});

app.listen(5000, () => {
    console.log("Server is ryning!");
});

//Application level middleware
//Route level
//Error handling
//Built in
//Third party 
