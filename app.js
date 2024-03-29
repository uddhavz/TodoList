const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// console.log(date.exports);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

const port = 3000;
const items = ["Buy Grocery","Cook Food"];
const workItems = [];

app.get("/", function (req, res) {
   let day = date.getDate();
   res.render("list", { listTitle: day, newListItem: items });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item)
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work", newListItem: workItems });
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item)
    res.redirect("/work");
});

app.listen(port, function () {
    console.log("Server started on " + port);
});