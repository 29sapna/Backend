const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const app = express();
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'node_connect',
  password: '12345678'
});


//let q ="insert into user (id, username, email, password) values ?";

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let data = [];
// for(let i=1; i<=100; i++){
//   data.push(getRandomUser());

// }

// try{
//   connection.query(q, [data], (err,result) => {
//     if(err) throw err;
//     console.log(result);
//   });
// }catch(err){
//   console.log(err);
// }

// connection.end();

// let getRandomUser = () => {
//     return [
//       faker.string.uuid(),
//       faker.internet.userName(),
//       faker.internet.email(),
//       faker.internet.password(),
//   ];
// };

app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) AS count FROM user`;
app.get("/user", (req,res) => {
    //res.send("sucess");
  let q= `select * from user`;
});

  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      //let count = result[0]["count(*)"];
      //console.log(result);
      //res.send(result);
      //res.send("edit.ejs");
      res.render("show.ejs", { users });

    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }

});

app.get("/user", (req,res) => {
  //res.send("sucess");
  let q= `select * from user`;
});

app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q =`select * from user where id =${id}`;
  console.log(id);
  res.render("edit.ejs");
});

app.patch("/user/:id", (req,res) => {
  res.send("updated");
});

app.listen("3000", () => {
  console.log("server is listing to port 3000");
});