var fs = require("fs");
var path = require("path");
var obj;
fs.readFile(path.join(__dirname, "_files", "quotes.json"), "utf8", function (
  err,
  data
) {
  if (err) throw err;
  obj = JSON.parse(data);
});
module.exports = (req, res) => {
  res.send(obj.quotes[Math.floor(Math.random() * obj.quotes.length)]);
};
