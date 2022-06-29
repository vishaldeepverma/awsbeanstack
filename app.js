const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/good", (req, res) => {
  res.send("hello good");
});

app.listen(8080, () => {
  console.log("started");
});
