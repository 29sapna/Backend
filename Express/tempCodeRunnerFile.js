const express = require("express");
const app = express();

// console.log(app);

let port =8000;

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
});

app.use((req, res)=>{
    console.log("request received");
});