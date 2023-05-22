const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;


app.get("/", function(req, res){
    // res.send("Hello");


var today  =  new Date();

if(today.getDay() === 6 || today.getDay() === 0){
    res.send("<h1>Yay it's the weekend!</h1>");
}else{
    // res.set("Content-Type", "text/html");
    res.sendFile(__dirname+"/index.html");
    // res.send();
}

});


app.listen(port,function(){
    console.log("Server started on "+ port);
});