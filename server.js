//console.log("Server Running");
const express = require("express");
const words = require("./words");
const app = express();
const port = process.env.PORT || 8000;

//console.log(words);

function check(word) {
    if (words[word]) {
        console.log("exists");
    } else {
        console.log("Does Not Exist");
    }
    console.log(word);
}

check("car", words);

app.get("/", function (req, res) { 
   const userName = req.query.user;
    res.send("Hello " + userName + "!");
    
});

app.listen(port, () => console.log(`App listening on ${port}!`));