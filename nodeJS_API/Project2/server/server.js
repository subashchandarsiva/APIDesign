// TODO: make this work.
// if yuo go to localhost:3000 the app
// there is expected crud to be working here
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var _ = require("lodash");

// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'
app.use(express.static("client"));

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var lions = [];
var id = 0;

// TODO: make the REST routes to perform CRUD on lion
app.get("/lions", (req, res) => {
  res.send(lions);
});
app.post("/lions", (req, res) => {
  id++;
  var data = req.body;
  console.log(req.body);
  data.id = id + "";
  lions.push(data);
  res.send(data);
});
app.get("/lions/:id", (req, res) => {
  var valID = req.params.id;
  //var newdata = { name: "newNamer" };
  var lion = _.findIndex(lions, { id: valID });
  if (!lions[lion]) {
    res.send();
  } else {
    res.send(lions[lion]);
  }
});
app.put("/lions/:id", (req, res) => {
  var valID = req.params.id;
  var newdata = { name: "newNamer" };
  var lion = _.findIndex(lions, { id: valID });
  if (!lions[lion]) {
    res.send();
  } else {
    var updatedLion = _.assign(lions[lion], newdata);
    res.send(updatedLion);
  }
});
app.delete("/lions/:id", (req, res) => {
  var valID = req.params.id;
  // var newdata = { name: "newNamer" };
  var lion = _.findIndex(lions, { id: valID });
  if (!lions[lion]) {
    res.send();
  } else {
    var updatedLion = lions[lion];
    lions.splice(lion, 1);
    res.json(updatedLion).status(204);
  }
});

app.listen(3000);
console.log("on port 3000");
