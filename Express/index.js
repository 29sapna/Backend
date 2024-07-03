const express = require("express");
const app = express();

// console.log(app);

let port =4040;

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
});

// app.use((req, res)=>{
    
//     console.log("request received");
//     // res.send("this is basic response")
//     res.send({
//         name:"apple",
//         color: "red",
//     });
// });

app.get("/", (req, res)=>{
    res.send("you contracted root path")
})

app.get("/search", (req, res)=>{
    res.send("you contracted search path")
})

app.get("/help", (req, res)=>{
    res.send("you contracted help path")
})