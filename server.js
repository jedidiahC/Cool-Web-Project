const express = require("express");
const fs = require("fs");
const path = require("path");
const url = require("url");

const app = express();

const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript"
};

console.log("Running server");

app.listen(1000);

app.get('/', (req, res) => {
  res.json({"eat shit": "bye"});
});