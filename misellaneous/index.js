const express = require("express");
const app =express()
const port =3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
 
app.get("/register", (req,res)=>{
    let {user, password} =req.query;
    res.send("standard GET response. Welcome");
});
app.post("/register", (req,res)=>{
    //console.log(req.body);
    let {user, password} =req.body;
    res.send(`standard post response. Welcome${user}`);
});

app.listen(port, ()=> {
    console.log(`listening to port ${port}`);
})