
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 }=require("uuid");
//uuidv4();
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "I love coding",
    },
    {
        id: uuidv4(),
        username: "sapna",
        content: "I love eating",
    },
    {
        id: uuidv4(),
        username: "sonal",
        content: "I love playing",
    },
];

app.get("/posts", (req, res) => {
    res.render("index", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({  id, username, content });
   // res.send("post request working");
    res.redirect("/posts");
});
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    //console.log(post);
   // res.send("post request working");
    res.render("show.ejs" ,{ posts });
});
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent =req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content =newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { posts });

});
app.delete("/posts/:id", (req, res)=> {
    let { id } =req.params;
    posts = posts.filter((p) => id !== p.id);
    res.send("delete sucess");
    res.redirect("/posts");

});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
