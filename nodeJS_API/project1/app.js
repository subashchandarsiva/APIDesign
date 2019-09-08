const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  fs.readFile(__dirname + "/hello.txt", (err, data) => {
    if (err) {
      res.send(500);
    }
    res.send("Hello " + data);
  });
});

app.listen(3000, (req, res) => {
  console.log("running in port 3000");
});
