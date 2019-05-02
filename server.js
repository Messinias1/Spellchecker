//console.log("Server Running");
const express = require("express");
const words = require("./words");
const app = express();
const port = process.env.PORT || 8000;

//console.log(words);
// var input = document.getElementById("input").value;

function check(word) {
    if (words[word]) {
        console.log("Exists");
    } else {
        console.log("Does Not Exist");
    }
    console.log(word);
    // document.getElementById("results").innerHTML = input;
}

check("car", words);

app.get("/", function (req, res) { 
    res.send(words);
    
});

app.listen(port, () => console.log(`App listening on ${port}!`));