var express = require("express");
var fs = require("fs");
var app = express();
var obj;
fs.readFile("_files/quotes.json", "utf8", function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});
app.get("/", async function (req, res) {
  res.send(obj.quotes[Math.floor(Math.random() * obj.quotes.length)]);
});

app.listen(8080);
